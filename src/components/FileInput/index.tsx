import {
  Box,
  FormLabel,
  CircularProgress,
  CircularProgressLabel,
  Text,
  FormControl,
  Flex,
} from "@chakra-ui/react";
import axios, { CancelTokenSource } from "axios";
import {
  useState,
  SetStateAction,
  Dispatch,
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
} from "react";
import {
  FieldError,
  FieldValues,
  UseFormSetError,
  UseFormTrigger,
} from "react-hook-form";

export interface FileInputProps {
  name: string;
  error?: FieldError;
  setImageUrl: Dispatch<SetStateAction<string>>;
  localImageUrl: string;
  setLocalImageUrl: Dispatch<SetStateAction<string>>;
  setError: UseFormSetError<FieldValues>;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<boolean | void>;
  trigger: UseFormTrigger<FieldValues>;
  completedCrop: any;
  setCompletedCrop: Dispatch<SetStateAction<any>>;
}

import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const FileInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FileInputProps
> = (
  {
    name,
    error = null,
    setImageUrl,
    localImageUrl,
    setLocalImageUrl,
    setError,
    onChange,
    trigger,
    completedCrop,
    setCompletedCrop,
    ...rest
  },
  ref
) => {
  const [progress, setProgress] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [, setCancelToken] = useState<CancelTokenSource>(
    {} as CancelTokenSource
  );
  const previewCanvasRef = useRef<any>(null);
  const [crop, setCrop] = useState<any>({ unit: "%", width: 30 });
  const [upImg, setUpImg] = useState<any>();
  const imgRef = useRef<any>(null);

  const onSelectFile = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      await onChange(e);
      trigger("image");

      const formData = new FormData();

      formData.append(e.target.name, e.target.files[0]);

      setImageUrl(e.target.files[0]);

      const { CancelToken } = axios;
      const source = CancelToken.source();
      setCancelToken(source);

      const reader = new FileReader() as any;
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    if (completedCrop && canvas && canvas.width > 0 && canvas.height > 0) {
      const dataURL = canvas.toDataURL();

      setLocalImageUrl(dataURL);
    }
  }, [completedCrop]);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel
        mx="auto"
        w="full"
        h="32px"
        marginBottom="16px"
        htmlFor={name}
        cursor={isSending ? "progress" : "pointer"}
        opacity={isSending ? 0.5 : 1}
      >
        <Flex
          w="90%"
          mx="auto"
          h="34px"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="md"
          bgColor="pGray.800"
          color="pGray.200"
          border="2px dashed"
          borderWidth={error?.message && 2}
          borderColor={error?.message && "red.500"}
        >
          {isSending ? (
            <>
              <CircularProgress
                trackColor="pGray.200"
                value={progress}
                color="orange.500"
              >
                <CircularProgressLabel>{progress}%</CircularProgressLabel>
              </CircularProgress>
              <Text as="span" pt={2} textAlign="center">
                Enviando...
              </Text>
            </>
          ) : (
            <Box pos="relative" h="14px">
              <Flex h="14px" alignItems="center" justifyContent="center">
                <Text as="span" textAlign="center">
                  Adicione sua imagem e selecione o código de barras
                </Text>
              </Flex>
            </Box>
          )}
          <input
            data-testid={name}
            disabled={isSending}
            id={name}
            name={name}
            onChange={onSelectFile}
            ref={ref}
            type="file"
            style={{
              display: "none",
            }}
            {...rest}
          />
        </Flex>
      </FormLabel>

      <Box w={"90%"} mx="auto">
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
        />

        <canvas
          ref={previewCanvasRef}
          style={{
            width: Math.round(completedCrop?.width ?? 0),
            height: Math.round(completedCrop?.height ?? 0),
          }}
        />
      </Box>
    </FormControl>
  );
};

export const FileInput = forwardRef(FileInputBase);

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Tooltip,
  TextareaAutosize as MuiTextareaAutosize,
} from "@mui/material";

interface TextareaAutosizeProps {
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  arialabel?: string;
  tooltip?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  fullWidth?: boolean;
  minRows?: number;
  maxRows?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // To allow additional props
}

const TextareaAutosize = ({
  name,
  label,
  placeholder,
  value,
  arialabel,
  tooltip = `Flexible textarea for: ${label}`,
  onChange,
  fullWidth = false,
  minRows = 2,
  maxRows = 4,
  error = null,
  ...rest
}: TextareaAutosizeProps) => {
  return (
    <Tooltip title={tooltip}>
      <FormControl
        variant="outlined"
        {...(error && { error: true })}
        style={{ width: fullWidth ? "100%" : "auto" }}
      >
        {label && <FormLabel>{label}</FormLabel>}

        <MuiTextareaAutosize
          name={name}
          aria-label={arialabel}
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
          minRows={minRows}
          maxRows={maxRows}
          style={{ width: fullWidth ? "100%" : "auto" }}
          {...(error && { "aria-invalid": true })}
          {...rest}
        />

        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    </Tooltip>
  );
};

export default TextareaAutosize;
export type { TextareaAutosizeProps };

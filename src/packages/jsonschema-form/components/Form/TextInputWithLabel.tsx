import TextInput from './TextInput';

export default function TextInputWithLabel({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {props.title}
      <TextInput {...props} />
    </label>
  );
}

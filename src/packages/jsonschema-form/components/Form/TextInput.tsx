export default function TextInput({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <input
      className={
        'mt-1 py-1 block w-full shadow-sm focus:ring-gray-400 focus:border-gray-400 border-gray-300 rounded-md' +
        className
      }
      {...props}
    />
  );
}

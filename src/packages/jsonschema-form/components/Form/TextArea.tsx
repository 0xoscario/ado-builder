export default function TextArea({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) {
  return (
    <textarea
      className={
        'mt-1 py-3 px-4 block w-full shadow-sm focus:ring-gray-400 focus:border-gray-400 border-gray-300 rounded-md' +
        className
      }
      {...props}
    />
  );
}

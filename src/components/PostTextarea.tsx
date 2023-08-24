import { PostInputProps } from './PostFormInput';

const PostTextarea = ({
  label,
  helpText,
  name,
  register,
  errors,
  options,
}: PostInputProps) => {
  const error = errors[name];

  return (
    <div className="flex h-64 w-full flex-col px-3 py-2">
      <label htmlFor={name} className="text-sm font-bold text-slate-600">
        {label}
        <span className="text-teal-700"> {helpText}</span>
      </label>
      <textarea
        id={name}
        className={`h-48 w-full resize-none rounded border px-2 text-gray-800 shadow
        ${
          error
            ? 'border-red-400 focus:outline-none focus:ring focus:ring-red-400'
            : 'outline outline-yuzu focus:outline-none focus:ring focus:ring-yuzu'
        }`}
        {...register(name, options)}
      />
      <div className="text-right text-red-500">{error && error.message}</div>
    </div>
  );
};

export default PostTextarea;

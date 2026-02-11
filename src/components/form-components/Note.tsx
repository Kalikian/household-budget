type NoteProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function Note({ handleChange, value }: NoteProps) {
  return (
    <div className="flex flex-col justify-center">
      <label>Note:</label>
      <textarea
        className="border border-solid rounded-md border-gray-400 p-2"
        placeholder="Write your note ..."
        name="noteArea"
        onChange={handleChange}
        value={value}
      ></textarea>
    </div>
  );
}

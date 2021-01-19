type Args = {
  field: string;
  title: string;
};

export default function emptyFieldsDeterminer(args: Args[]): string[] {
  const emptyFields: string[] = [];
  args.forEach((arg) => {
    if (!arg.field.trim().length) {
      emptyFields.push(arg.title);
    }
  });
  return emptyFields;
}

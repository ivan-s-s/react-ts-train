import { FC, FocusEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, FormField } from "ui-kit";

export interface TForm {
  comment: string;
};

export const TextAreaPage: FC = () => {
  const [isFocused, setIsFocused] = useState({
    comment: false,
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm<TForm>();
  const watchAllFields = watch();

  const onSubmit = (data: TForm) => {
    console.log("TeatArea data: ", data);
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    setIsFocused({...isFocused, [event.target.name]: true});
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (watchAllFields[event.target.name] !== "") {
      setIsFocused({...isFocused, [event.target.name]: true});
    } else {
      setIsFocused({...isFocused, [event.target.name]: false});
    }
  };

  return (
    <div className="TextAreaPage">
      <div className="FormPage">
      <div className="FormPage-Content">
        <h1 className="FormPage-ContentTitle">TextArea</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="FormPage-FormFieldGroup">
            <FormField
              label="Comment"
              name="comment"
              type="textarea"
              register={register}
              error={errors.comment && errors.comment.message}
              isFocused={isFocused.comment}
              isRequired
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <Button className="FormPage-Button" typeButton="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
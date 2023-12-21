import { useState } from "react";
import type { ChangeEvent, FC } from "react";
import { Checkbox, CheckboxGroup } from "ui-kit";
import "./CheckboxPage.scss";

type TCheckedGroup = {
  [T:string]: string[];
}

export const CheckboxPage: FC = () => {
  const checkboxGroupOptions = {
    category: ["Smartphones", "Notebooks", "Laptops"]
  };
  const [checkedBoxByGroup, setCheckedBoxByGroup] = useState<TCheckedGroup>({
    category: [],
  });

  const [checkedBox, setCheckedBox] = useState(false);

  const handleChangeCheckedBox = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setCheckedBox(event.target.checked);
  };

  const handleChangeCheckedBoxGroup = (
    event: ChangeEvent<HTMLInputElement>,
    nameGroup: string
  ) => {
    if (event.target.checked) {
      if (checkedBoxByGroup[nameGroup].includes(event.target.value)) {
        setCheckedBoxByGroup(prevState => ({
          ...prevState,
        }));
      } else {
        setCheckedBoxByGroup(prevState => ({
          ...prevState,
          [nameGroup]: [...prevState[nameGroup], event.target.value]
        }));
      }
    } else {
      setCheckedBoxByGroup(prevState => ({
        ...prevState,
        [nameGroup]: [
          ...prevState[nameGroup].filter(x => x !== event.target.value),
        ],
      }));
    };
  };

  return (
    <div className="CheckboxPage">
      <h2>Checkbox</h2>
      <Checkbox
        id="1"
        checked={checkedBox}
        label={"SingleSecond"}
        onChange={handleChangeCheckedBox}
        name={"Loool"}
        nameGroup={"Loool"}/>
        <div>
          <pre>{JSON.stringify(checkedBox, null, 2)}</pre>
        </div>
        <h2>Checkbox Group</h2>
        <div className="CheckboxPage-CheckboxGroup">
          {checkboxGroupOptions.category.map(label => (
            <CheckboxGroup
              checkedBoxByGroup={checkedBoxByGroup}
              id={label}
              key={label}
              nameGroup="category"
              label={label}
              onChange={handleChangeCheckedBoxGroup}
            />
          ))}
        </div>
        <div>
          <pre>{JSON.stringify(checkedBoxByGroup, null, 2)}</pre>
        </div>
    </div>
  )
}

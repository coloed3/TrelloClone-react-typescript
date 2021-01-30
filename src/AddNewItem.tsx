import React, { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import { AddItemButton } from "./styles";

interface AddNewItemsProps {
  toggleButtonText: string;
  dark?: boolean;
  onAdd(text: string): void;
}

export const AddNewItem = (props: AddNewItemsProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

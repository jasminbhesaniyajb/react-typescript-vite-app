import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { StudentFormValues } from "../validation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import StudentForm from "../components/student-form";

function Students() {
  const [open, setOpen] = useState<boolean>(false);

  const handleAddStudent = (data: StudentFormValues) => {
    console.log("New Student Added:", data);
    setOpen(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3>Students</h3>
        </div>
        <Button onClick={() => setOpen(true)}>+ New Student</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
          </DialogHeader>

          <StudentForm onSubmit={handleAddStudent} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Students;

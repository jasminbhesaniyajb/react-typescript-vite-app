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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Student } from "../types";

function Students() {
  const [open, setOpen] = useState<boolean>(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  const handleAddStudent = (data: StudentFormValues) => {
    if (editingStudent) {
      setStudents((prev) =>
        prev.map((student) =>
          student.id === editingStudent.id ? { ...student, ...data } : student
        )
      );
    } else {
      const newStudent: Student = {
        id: Math.random().toString(),
        ...data,
      };
      setStudents((prev) => [...prev, newStudent]);
    }
    setOpen(false);
    setEditingStudent(null);
  };

  const onEdit = (student: Student) => {
    setEditingStudent(student);
    setOpen(true);
  };

  const onDelete = (id: string) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h3>Students List</h3>
        </div>
        <Button
          onClick={() => {
            setEditingStudent(null);
            setOpen(true);
          }}
        >
          + New Student
        </Button>
      </div>

      {/* Data table */}
      <div className="rounded-md border mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Class</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students?.length > 0 ? (
              students.map((student: Student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.firstName}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.mobile}</TableCell>
                  <TableCell>{student.studentClass}</TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onEdit(student)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(student.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No students found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);
          if (!value) setEditingStudent(null);
        }}
      >
        <DialogContent className="max-w-2xl h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
          </DialogHeader>

          <StudentForm
            onSubmit={handleAddStudent}
            defaultValues={editingStudent}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Students;

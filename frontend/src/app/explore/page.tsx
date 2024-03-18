"use client";
import React from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";

export default function ExplorePage() {
  return (
    <>
      <TableData />
    </>
  );
}

function TableData() {
  const data = useQuery({
    queryKey: ["1"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/");
      return res.json();
    },
  });

  return (
    <div className="w-full p-4 space-y-4 md:p-10">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-bold">Explore</h1>
      </div>
      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-auto">Username</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>Input</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data?.map((row: any, index: any) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.username}</TableCell>
                <TableCell>{row.language}</TableCell>
                <TableCell>{row.input}</TableCell>
                <TableCell>{row.source}</TableCell>
                <TableCell>{new Date(row.createdAt).toUTCString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";

export default function Form() {
  const [username, setUsername] = useState("");
  const [language, setLanguage] = useState("");
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: {
      username: string;
      language: string;
      input: string;
      source: string;
    }) => {
      setIsLoading(true);
      return axios.post("http://localhost:8080/", data);
    },
    onSuccess: () => {
      setUsername("");
      setLanguage("");
      setInput("");
      setCode("");
      setIsLoading(false);
    },
  });

  return (
    <Card className="mx-auto max-w-lg w-full">
      <CardHeader>
        <CardTitle className="text-xl">Share your code</CardTitle>
        <CardDescription>
          Enter your information to share your code
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="language">Preferred code language</Label>
          <Select
            value={language}
            onValueChange={(value: string) => {
              setLanguage(value);
            }}
          >
            <SelectTrigger id="language">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="c++">C++</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="input">Standard input</Label>
          <Textarea
            id="input"
            placeholder="Enter your standard input"
            required
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="code">Source code</Label>
          <Textarea
            className="min-h-[150px]"
            id="code"
            placeholder="Enter your source code"
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <Button
          className="w-full"
          type="submit"
          disabled={isLoading}
          onClick={() => {
            mutation.mutate({ username, language, input, source: code });
          }}
        >
          Submit
        </Button>

        <Link
          className={cn(
            buttonVariants({
              variant: "secondary",
            }),
            "w-full mt-4"
          )}
          href="/explore"
        >
          Explore Submitted Code
        </Link>
      </CardContent>
    </Card>
  );
}

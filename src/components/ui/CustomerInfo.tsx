"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CustomerInfoProps {
  data: any;
  onChange: (data: any) => void;
}

export default function CustomerInfo({ data, onChange }: CustomerInfoProps) {
  const [formData, setFormData] = useState(data);

  useEffect(() => {
    onChange(formData);
  }, [formData, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone || ""}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}

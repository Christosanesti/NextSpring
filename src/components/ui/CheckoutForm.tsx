"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CustomerInfo from "./CustomerInfo";
import ShippingInfo from "./ShippingInfo";
import PaymentInfo from "./PaymentInfo";
import OrderConfirmation from "./OrderConfirmation";

const steps = [
  "Customer Information",
  "Shipping Details",
  "Payment",
  "Confirmation",
];

export default function CheckoutForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    customerInfo: {},
    shippingInfo: {},
    paymentInfo: {},
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleFormDataChange = (step: string, data: object) => {
    setFormData((prev) => ({ ...prev, [step]: data }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData);
    handleNext(); // Move to confirmation step
  };

  return (
    <form onSubmit={handleSubmit} className="text-right gap-10">
      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            {steps.map((step, index) => (
              <span
                key={step}
                className={`inline-block px-3 py-1 mr-2 text-sm ${
                  index === currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                } rounded-full`}
              >
                {index + 1}. {step}
              </span>
            ))}
          </div>

          {currentStep === 0 && (
            <CustomerInfo
              data={formData.customerInfo}
              onChange={(data) => handleFormDataChange("customerInfo", data)}
            />
          )}
          {currentStep === 1 && (
            <ShippingInfo
              data={formData.shippingInfo}
              onChange={(data) => handleFormDataChange("shippingInfo", data)}
            />
          )}
          {currentStep === 2 && (
            <PaymentInfo
              data={formData.paymentInfo}
              onChange={(data) => handleFormDataChange("paymentInfo", data)}
            />
          )}
          {currentStep === 3 && <OrderConfirmation data={formData} />}

          <div className="mt-6 flex justify-between">
            {currentStep > 0 && (
              <Button type="button" variant="outline" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button type="button" onClick={handleNext}>
                Next
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button type="submit">Place Order</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

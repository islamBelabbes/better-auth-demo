"use client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/otp";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function OtpForm() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Verification Code
        </CardTitle>
        <CardDescription className="text-center">
          We've sent a 6-digit code to your phone number ending in ***1234
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col items-center space-y-4">
          <InputOTP maxLength={4}>
            <InputOTPGroup className="space-x-2">
              <InputOTPSlot index={0} className="rounded-md border-l" />
              <InputOTPSlot index={1} className="rounded-md border-l" />
              <InputOTPSlot index={2} className="rounded-md border-l" />
              <InputOTPSlot index={3} className="rounded-md border-l" />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-muted-foreground text-sm">
            Didn't receive a code?{" "}
            <Button variant="link" className="p-0">
              Resend
            </Button>
          </p>

          <Button className="w-full cursor-pointer">Verify</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default OtpForm;

// apps/docs/components/Newsletter.tsx
"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormInput,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Button,
} from "@thirdbracket/bracketui";

interface NewsletterState {
  email: string;
  error: string | null;
  isSubmitting: boolean;
  isSuccess: boolean;
}

const Newsletter = () => {
  const [state, setState] = useState<NewsletterState>({
    email: "",
    error: null,
    isSubmitting: false,
    isSuccess: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, isSubmitting: true, error: null }));

    try {
      if (!state.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        throw new Error("Please enter a valid email address");
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        email: "",
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isSubmitting: false,
        error: error instanceof Error ? error.message : "Something went wrong",
      }));
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 ">
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
          {/* Left side content */}
          <div className="flex-1 max-w-xl">
            <h2 className="font-black text-[1.875rem]/[2.375rem] sm:text-[2.25rem]/[2.75rem] lg:text-[2.75rem]/[3.25rem] text-gray-950 dark:text-white mb-2 ">
              Stay in the loop
            </h2>
            <p className="text-[0.9375rem]/[1.75rem] sm:text-[1.0625rem]/[1.875rem] lg:text-[1.1875rem]/[2rem]  text-gray-800/70 dark:text-gray-200/40">
              Subscribe to our newsletter for updates and exclusive content
              delivered straight to your inbox.
            </p>
          </div>

          {/* Right side form */}
          <div className="flex-1 max-w-xl w-full">
            {state.isSuccess ? (
              <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 text-lg font-medium">
                  Thanks for subscribing! Please check your email to confirm
                  your subscription.
                </p>
              </div>
            ) : (
              <Form onSubmit={handleSubmit} className="space-y-4">
                <FormControl isInvalid={!!state.error}>
                  <FormLabel htmlFor="email" className="sr-only">
                    Email address
                  </FormLabel>
                  <div className="relative">
                    <FormInput
                      id="email"
                      type="email"
                      value={state.email}
                      onChange={(e) =>
                        setState((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="Enter your email"
                      className="w-full pr-36 h-14 text-lg rounded-xl border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary-500"
                      aria-label="Email address"
                      disabled={state.isSubmitting}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                      <Button
                        type="submit"
                        disabled={state.isSubmitting}
                        isLoading={state.isSubmitting}
                        size="lg"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                  <FormHelperText className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </FormHelperText>
                  {state.error && (
                    <FormErrorMessage className="mt-2">
                      {state.error}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Layout,
  Wrench,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ServiceCard } from "./ServiceCard";
import { StepIndicator } from "./Step-Indicator";

export function ServiceBookingUI() {
  const [state, setState] = useState({
    step: 1,
    serviceType: "" as "design" | "repair" | "",
    company: "",
    date: undefined as Date | undefined,
  });

  const nextStep = () => setState((s) => ({ ...s, step: s.step + 1 }));
  const prevStep = () => setState((s) => ({ ...s, step: s.step - 1 }));

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-white rounded-[2.5rem] shadow-2xl border border-stone-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* LEFT: FORM AREA */}
          <div className="flex-1 p-8 md:p-12 border-r border-stone-50">
            <StepIndicator currentStep={state.step} />

            <div className=" min-h-87.5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {state.step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <div className="mb-8">
                      <h2 className="text-2xl font-medium text-stone-900">
                        Choose Track
                      </h2>
                      <p className="text-sm text-stone-500 font-light">
                        Select the service for your facility.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <ServiceCard
                        id="design"
                        label="Design"
                        icon={Layout}
                        isSelected={state.serviceType === "design"}
                        onClick={(id) => {
                          setState({ ...state, serviceType: id });
                          nextStep();
                        }}
                      />
                      <ServiceCard
                        id="repair"
                        label="Repair"
                        icon={Wrench}
                        isSelected={state.serviceType === "repair"}
                        onClick={(id) => {
                          setState({ ...state, serviceType: id });
                          nextStep();
                        }}
                      />
                    </div>
                  </motion.div>
                )}

                {state.step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-6"
                  >
                    <div className="mb-8">
                      <h2 className="text-2xl font-medium text-stone-900">
                        Information
                      </h2>
                      <p className="text-sm text-stone-500 font-light">
                        Project entity and preferred schedule.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Input
                        placeholder="Company Name"
                        className="h-14 rounded-2xl bg-stone-50 border-none px-6 focus-visible:ring-stone-900"
                        value={state.company}
                        onChange={(e) =>
                          setState({ ...state, company: e.target.value })
                        }
                      />

                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full h-14 rounded-2xl border-stone-100 justify-start px-6 font-light"
                          >
                            <CalendarIcon className="mr-3 h-4 w-4 text-stone-400" />
                            {state.date
                              ? format(state.date, "PPP")
                              : "Select Date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 border-none shadow-2xl rounded-3xl overflow-hidden">
                          <Calendar
                            mode="single"
                            selected={state.date}
                            onSelect={(d) => setState({ ...state, date: d })}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="flex gap-3 pt-6">
                      <Button
                        variant="ghost"
                        onClick={prevStep}
                        className="rounded-2xl h-14 px-6"
                      >
                        Back
                      </Button>
                      <Button
                        disabled={!state.company || !state.date}
                        onClick={nextStep}
                        className="flex-1 bg-stone-900 text-white hover:bg-stone-800 rounded-2xl h-14 font-bold uppercase text-[10px] tracking-widest shadow-lg"
                      >
                        Review Request <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {state.step === 3 && (
                  <motion.div key="step3" className="text-center space-y-6">
                    <div className="h-20 w-20 bg-stone-900 rounded-full flex items-center justify-center mx-auto text-white shadow-xl">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-light tracking-tight">
                      Request Logged
                    </h2>
                    <p className="text-sm text-stone-500 max-w-xs mx-auto">
                      An expert will contact you within 4 hours.
                    </p>
                    <Button
                      onClick={() => (window.location.href = "/")}
                      className="w-full bg-stone-100 text-stone-900 rounded-2xl h-14 font-bold uppercase text-[10px] tracking-widest"
                    >
                      Done
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: LIVE SUMMARY PANEL (UX Anchor) */}
          <aside className="w-full lg:w-80 bg-stone-50 p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">
                Current Order
              </h4>

              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[9px] text-stone-400 uppercase font-bold">
                    Service
                  </p>
                  <p className="text-sm font-medium capitalize text-stone-900">
                    {state.serviceType || "—"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] text-stone-400 uppercase font-bold">
                    Company
                  </p>
                  <p className="text-sm font-medium truncate text-stone-900">
                    {state.company || "—"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] text-stone-400 uppercase font-bold">
                    Schedule
                  </p>
                  <p className="text-sm font-medium text-stone-900">
                    {state.date ? format(state.date, "MMM dd, yyyy") : "—"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-4 bg-white rounded-2xl border border-stone-100">
              <p className="text-[9px] text-stone-400 leading-relaxed italic">
                A dedicated account manager is assigned to all B2B requests.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

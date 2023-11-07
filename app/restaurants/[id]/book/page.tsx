'use client';

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function isDateBeforeToday(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
}

function generateTimeOptions() {
  const startTime = 11 * 60; // 10:00 converted to minutes
  const endTime = 22 * 60; // 22:00 converted to minutes
  const interval = 30; // 30 minutes interval

  const timeOptions = [];

  for (let timeInMinutes = startTime; timeInMinutes <= endTime; timeInMinutes += interval) {
    const hours = Math.floor(timeInMinutes / 60);
    const minutes = timeInMinutes % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    timeOptions.push(
      <SelectItem key={formattedTime} value={formattedTime}>
        {formattedTime}
      </SelectItem>
    );
  }

  return timeOptions;
}

function generateNumberOfPeopleOptions(maxPeople: number) {
  const numberOptions = [];

  for (let i = 1; i <= maxPeople; i++) {
    numberOptions.push(
      <SelectItem key={i} value={i.toString()}>
        {i}
      </SelectItem>
    );
  }

  return numberOptions;
}

const FormSchema = z.object({
  dateOfBooking: z.date({
    required_error: "A date of booking is required.",
  }),
  time: z.string({required_error: "Please select your desired time."}),
  numberOfPeople: z.string({required_error: "Please select your number of people."}),
  firstName: z.string().min(2, {message: "First name must be at least 2 characters."}),
  lastName: z.string().min(2, {message: "Last name must be at least 2 character."}),
  email: z.string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
})

export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values: ",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-6 gap-4 bg-orange-300 rounded-xl">
        <div className="flex md:flex-row flex-col justify-center md:gap-16 gap-2">
        <div className="flex flex-col">
          <FormField
            control={form.control}
            name="firstName"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-gray-50">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-gray-50">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-gray-50">Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <FormField
            control={form.control}
            name="time"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-gray-50">Desired time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-52 overflow-auto">
                    {generateTimeOptions()}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numberOfPeople"
            render={({field}) => (
              <FormItem>
                <FormLabel className="text-gray-50">Number of people</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="People" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="max-h-52 overflow-auto">
                    {generateNumberOfPeopleOptions(10)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dateOfBooking"
            render={({field}) => (
              <FormItem className="flex flex-col">
                <FormLabel className="text-gray-50">Date of the booking</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn("w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground")}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0"
                                  align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => isDateBeforeToday(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage/>
              </FormItem>
            )}
          />
        </div>
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}
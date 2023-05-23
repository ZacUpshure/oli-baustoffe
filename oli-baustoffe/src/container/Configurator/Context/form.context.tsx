import React, { createContext, useState } from 'react';

interface FormData {
  [key: string]: any; // Adjust the type according to your form data structure
}

interface FormContextValue {
  formData: FormData;
  updateFormData: (step: string, data: any) => void;
  resetFormData: () => void;
}

export const FormContext = createContext<FormContextValue | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (step: string, data: any) => {
    setFormData((prevData) => ({ ...prevData, [step]: data }));
  };

  const resetFormData = () => {
    setFormData({});
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};


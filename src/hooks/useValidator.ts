import { useState, useMemo, ChangeEvent, FormEvent, useEffect } from "react";
import * as Joi from "joi-browser";
import { Inputs } from "../interface/input";

type DataType = Record<string, unknown>;
type Errors = Record<string, string[]>;
type OnSubmit = (data: DataType) => void;

const useValidator = (inputs: Inputs, onSubmit: OnSubmit) => {
    const [data, setData] = useState<DataType>({});
    const [errors, setErrors] = useState<Errors>({});
    const [isValid, setIsValid] = useState<boolean>(false);

    const schema = useMemo(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const result: { [key: string]: Joi.Schema } = {};
        Object.keys(inputs).forEach((key) => {
            result[inputs[key].name] = inputs[key].schema;
        });
        return Joi.object(result);
    }, [inputs]);

    useEffect(() => {
        const { error } = Joi.validate(data, schema);

        setIsValid(!error && Object.keys(errors).length === 0 ? true : false);
    }, [data, errors, schema]);

    const validateProperty = useMemo(
        () =>
            ({ name, value }: { name: string; value: unknown }) => {
                const input = inputs[name];

                if (!input) return [];

                // If the input has a `ref` property, compare its value with the value of the referenced input
                if (input.ref) {
                    const refInput = inputs[input.ref];
                    if (
                        refInput &&
                        refInput.name in data &&
                        value !== data[refInput.name]
                    ) {
                        return [`"${input.label}" and "${refInput.label}" must match`];
                    }
                }

                const subSchema = input.schema;
                const { error } = Joi.validate(value, subSchema);

                return error?.details.map((d: { message: string }) => d.message) ?? [];
            },
        [inputs, data]
    );

    const validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(data, schema, options);
        if (!error) return [];
        return error.details.reduce(
            (acc: Errors, { path, message }: { path: string[]; message: string }) => {
                const fieldName = path[0];
                acc[fieldName] = [...(acc[fieldName] ?? []), message];
                return acc;
            },
            {}
        );
    };

    const validateOnChange = ({
        currentTarget: input,
    }: ChangeEvent<HTMLInputElement>) => {
        const newErrors: Errors = { ...errors };
        const value = input.type === "checkbox" ? input.checked : input.value;
        const errorMessages = validateProperty({
            name: input.name,
            value: value,
        });

        newErrors[input.name] = errorMessages;
        if (errorMessages.length === 0) {
            delete newErrors[input.name];
        }
        setErrors(newErrors);

        const newData: DataType = { ...data, [input.name]: value };
        setData(newData);
    };

    const validateOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onSubmit(data);
        }
    };

    return { data, errors, isValid, validateOnChange, validateOnSubmit };
};

export default useValidator;

import Joi from 'joi-browser';


interface Inputs {
    [key: string]: {
        name: string;
        label: string;
        type: string;
        schema: Joi.Schema;
        ref?: string
    };
}
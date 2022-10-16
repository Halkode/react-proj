import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from './Text';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) =>{
            return (
                <div className='flex gap-2 items-center'>
                    {Story()}
                    <Text>Lembrar de mim</Text>
                </div>
            )
        }
    ], 
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

import { Meta, StoryObj} from "@storybook/react"
import { Checkbox, CheckboxProps } from './Checkbox';

export default {
    title: 'Componentes/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (story) => {
            return (
                <div className="flex items-center gap-2">
                    {story()}
                    <text fontSize="sm">Lembrar por 30 dias</text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

export const Default: StoryObj <CheckboxProps> = {}
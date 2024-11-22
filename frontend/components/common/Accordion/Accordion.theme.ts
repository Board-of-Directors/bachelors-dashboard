import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
    root: {
        borderRadius: '10px',
        borderWidth: '1px',
        borderColor: 'button.secondary',
        overflow: 'clip',
    },
    container: {
        border: 'none',

        '&:not(:last-child)': {
            borderBottom: '1px',
            borderBottomColor: 'button.secondary'
        }
    },
    panel: {
        padding: 0,
    },
    button: {
        padding: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    icon: {
        height: "24px",
        width: "24px",

        path: {
            fill: "icon.gray"
        }
    }
})

export const accordionTheme = defineMultiStyleConfig({ baseStyle })
import { Text, Divider } from "@adobe/react-spectrum";

type textWithDividerType = {
    name: string | undefined;
    text: string | undefined;
}

const TextWithDivider: React.FC<textWithDividerType> = ({ name, text }) => {

    return (
        <>
            <Text>{name}: {text}</Text>
            <Divider size="S" />
        </>
    )
};
export default TextWithDivider;
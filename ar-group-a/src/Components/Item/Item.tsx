import s from "./Item.styles"



interface Props {
    name: string
    imageURL: string
}

export const Item:React.FC<Props> = ({name, imageURL}) => {


    return (
        <s.itemContainer>
            <s.itemName>{name}</s.itemName>
            <s.itemImage src={imageURL} />
        </s.itemContainer>
    )

}
import IRentableItem from "./IRentableItem";

export default interface IItemDetailsProps {
    rentableItem: IRentableItem | null
    onItemRented: (itemId: number) => void
}
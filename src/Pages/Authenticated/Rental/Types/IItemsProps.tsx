import IRentableItem from "./IRentableItem";

export default interface IItemsProps {
    onItemSelected: (rentableItem: IRentableItem) => void
    rentedItemId: number | null
}
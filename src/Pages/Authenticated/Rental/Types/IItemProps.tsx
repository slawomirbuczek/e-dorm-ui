import IRentableItem from "./IRentableItem";

export default interface IItemProps {
    rentableItem: IRentableItem
    selectedItemId: number
    onItemSelected: () => void
}
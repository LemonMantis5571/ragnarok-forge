import Crafting from "~/components/Crafting"
import getCraftableItems from "../actions/getCraftableItems"
import getOrders from "../actions/getOrders";

const page = async () => {
    const items = await getCraftableItems();
    const orders = await getOrders();
    if (!items) {
        return null;
    }

    return (
        <Crafting Item={items}  Orders={orders}/>
    )
}

export default page
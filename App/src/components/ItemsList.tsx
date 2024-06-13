import { CardContent, Chip, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import { useState } from 'react';
// import Typography from '@mui/material/Typography';

function ItemList() {
    const [itemsList, setItemsList] = useState<string[]>([]);

    const addItem = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        console.log(e);
        if (e.key === 'Enter') {
            // itemsList.push((e.target as any).value);
            setItemsList([...itemsList, (e.target as any).value])
        }
    };

    const deleteItem = (itemToDelete: string): void => {
        setItemsList(itemsList.filter(item => item !== itemToDelete));
    };

    const ItemChips = (): React.JSX.Element[] => {
        const chips: React.JSX.Element[] = [];
        console.log(itemsList);

        itemsList.forEach(item => {
            chips.push(
                <Chip label={item} onDelete={() => deleteItem(item)} />
            )
        });

        return chips;
    };

    return (
        <>
            <Card variant="outlined">
                <CardContent>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" onKeyDown={addItem} />
                    {ItemChips()}
                </CardContent>
            </Card>
        </>
    );
}

export default ItemList;

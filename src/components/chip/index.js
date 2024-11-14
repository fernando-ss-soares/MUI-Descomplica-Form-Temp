import Chip from '@mui/material/Chip';

export default function ChipStatus({ label, color }) {
    
    if (color === "Em Andamento") {
        return (
            <Chip label={label} color={'primary'} />
        )
    }

    if (color === "Aguardando") {
        return (
            <Chip label={label} color={'secondary'} />
        )
    }

    if (color === "Concluída") {
        return (
            <Chip label={label} color={'success'} />
        )
    }
}

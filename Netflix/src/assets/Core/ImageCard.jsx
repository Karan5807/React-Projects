import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const ImageCard = ({ ImageUrl, Title }) => {
    return (
        <Card sx={{ minWidth: 210 }}>
            <CardMedia
                style={{ padding: 2 }}
                sx={{ height: 320 }}
                image={ImageUrl}
                title={Title}
            />
        </Card>
    );
}
export default ImageCard;
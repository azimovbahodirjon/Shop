// components/ProductCard.tsx
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  CardActionArea,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Props = {
  product: Product;
  onDelete?: (id: number) => void;
};

const ProductCard = ({ product, onDelete }: Props) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea onClick={() => navigate(`/products/${product.id}`)}>
        <CardMedia
          component="img"
          height="180"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" noWrap>
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => setLiked(!liked)}
          color={liked ? "error" : "default"}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton onClick={() => onDelete?.(product.id)}>
          <DeleteIcon />
        </IconButton>
        <Box flexGrow={1} />
        <IconButton onClick={() => console.log("Add to cart:", product)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

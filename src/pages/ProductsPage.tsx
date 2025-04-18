// pages/ProductsPage.tsx
import { useEffect, useState, useMemo } from "react";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Fade,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";
import MainLayout from "../layouts/MainLayout";

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"none" | "priceAsc" | "priceDesc">(
    "none"
  );
  const [categories, setCategories] = useState<string[]>([]);
  console.log("hello");

  useEffect(() => {
    Promise.all([
      fetch("https://dummyjson.com/products").then((r) => r.json()),
      fetch("https://dummyjson.com/products/categories").then((r) => r.json()),
    ])
      .then(([prodData, catData]) => {
        setProducts(prodData.products);

        const cats: string[] = (catData as any[]).map((c) =>
          typeof c === "string"
            ? c
            : typeof c.slug === "string"
            ? c.slug
            : typeof c.name === "string"
            ? c.name
            : ""
        );
        setCategories(cats);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    let list = products;

    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(q));
    }
    if (sortBy === "priceAsc") {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceDesc") {
      list = [...list].sort((a, b) => b.price - a.price);
    }
    return list;
  }, [products, category, search, sortBy]);

  const handleDelete = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const onCategoryChange = (e: SelectChangeEvent<string>) =>
    setCategory(e.target.value);
  const onSortChange = (e: SelectChangeEvent<string>) =>
    setSortBy(e.target.value as any);

  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
        <Box
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 2,
            background: "linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            📦 Our Featured Products
          </Typography>
          <Typography variant="subtitle1">
            Discover &amp; filter your perfect item in just a few clicks.
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
          mb={4}
        >
          <TextField
            fullWidth
            label="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              label="Category"
              onChange={onCategoryChange}
            >
              <MenuItem value="all">All</MenuItem>
              {categories.map((cat) => {
                const name = String(cat);
                const label = name.charAt(0).toUpperCase() + name.slice(1);
                return (
                  <MenuItem key={name} value={name}>
                    {label}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Sort by</InputLabel>
            <Select value={sortBy} label="Sort by" onChange={onSortChange}>
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="priceAsc">Price: Low &gt; High</MenuItem>
              <MenuItem value="priceDesc">Price: High &gt; Low</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            onClick={() => {
              setSearch("");
              setCategory("all");
              setSortBy("none");
            }}
          >
            Reset
          </Button>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" mt={10}>
            <CircularProgress size={50} color="primary" />
          </Box>
        ) : filtered.length === 0 ? (
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            mt={10}
          >
            No products match your criteria.
          </Typography>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
            {filtered.map((product) => (
              <Fade in timeout={600} key={product.id}>
                <Box
                  sx={{
                    flex: "1 1 calc(33.333% - 32px)",
                    minWidth: "280px",
                    maxWidth: "400px",
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.03)" },
                  }}
                >
                  <ProductCard product={product} onDelete={handleDelete} />
                </Box>
              </Fade>
            ))}
          </Box>
        )}
      </Container>
    </MainLayout>
  );
};

export default ProductsPage;

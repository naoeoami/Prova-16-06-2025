import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Box, Container, CssBaseline, Toolbar, Typography } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CssBaseline />
        <AppBar>
          <Toolbar>
          </Toolbar>
        </AppBar>

        <Box component="main"
          sx={{ minHeight: "calc(100vh - 120px)", py: 4 }}>
          <Container>
            {children}
          </Container>
        </Box>

        {/* Rodapé */}
        <Box component="footer"
            sx={{ 
              bgcolor: "#1976d2",
              color: "#fff",
              py : 2,
              textAlign : "center"
            }}>
        </Box>
      </body>
    </html>
  );
}

// import Sidebar from "../components/Sidebar";
// import { render } from "../test/utils";

// describe("Sidebar component", () => {
//   it("renderizame sidebar Generos", () => {
//     const { getByText } = render(<Sidebar />);
//     // Verificamos que se renderice el texto Cinemagic
//     expect(getByText(/🍿Generos/)).not.toBeUndefined();
//   });

//   //Aqui va tu segundo test
// });


import { render, screen, waitFor } from '@testing-library/react';
import Sidebar from "../components/Sidebar.tsx";
import { getGenres } from '../services/genres.service.ts'; // Asegúrate de que la ruta sea correcta

// Mock de la función getGenres
jest.mock('../services/genres.service.ts');

describe('Sidebar Component', () => {
  it('renders genres when data is fetched', async () => {
    const mockGenres = [{ id: 1, name: 'Action' }];
    getGenres.mockResolvedValue(mockGenres);

    render(<Sidebar />);

    // Espera a que los datos de género se carguen y luego realiza las pruebas
    await waitFor(() => {
      const genreElement = screen.getByText('Action');
      expect(genreElement).toBeInTheDocument();
    });
  });

  it('displays a loading state while fetching data', () => {
    getGenres.mockReturnValue(new Promise(() => {}));

    render(<Sidebar />);

    const loadingElement = screen.getByText('Loading...'); // Asegúrate de que tengas algún texto de carga en tu componente
    expect(loadingElement).toBeInTheDocument();
  });

  // Puedes agregar más pruebas según tus necesidades
});
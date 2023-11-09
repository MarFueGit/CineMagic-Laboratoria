import Header from '../components/Header';
import {render} from '../test/utils'

describe('Header component', () => {
    it('Muestra el titulo cinemagic', () => {
        const {getByText} = render(<Header />)
        // Verificamos que se renderice el texto Cinemagic
        expect(getByText(/CineMary/)).not.toBeUndefined()

    })

})
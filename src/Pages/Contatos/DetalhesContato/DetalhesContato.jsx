export default function DetalhesContato() {
  return (
    <div className="col-md-3 border border-dark py-4 bg-light h-100 d-flex flex-column">
      <div
        className="mb-3"
        style={{
          flexBasis: '40%',
          backgroundColor: '#ccc',
          borderRadius: '8px',
        }}
      >
        <img
          src="https://via.placeholder.com/150"
          alt="Foto do contato"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      <div style={{ flexGrow: 1, overflowY: 'auto', textAlign: 'left' }}>
        <h5>Nome do Contato</h5>
        <p>Email: contato@example.com</p>
        <p>Telefone: (11) 99999-9999</p>
      </div>
    </div>
  );
}

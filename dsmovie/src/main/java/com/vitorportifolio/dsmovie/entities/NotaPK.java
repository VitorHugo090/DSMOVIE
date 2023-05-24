package com.vitorportifolio.dsmovie.entities;

public class NotaPK {
    private Filme filme; 
    private Usuario usuario;

    public Filme getFilme() {
        return filme;
    }

    public void setFilme(Filme filme) {
        this.filme = filme;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public NotaPK(){
        
    }
}

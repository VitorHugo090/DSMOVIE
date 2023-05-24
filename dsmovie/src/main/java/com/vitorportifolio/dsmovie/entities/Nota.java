package com.vitorportifolio.dsmovie.entities;

public class Nota {
    private NotaPK id = new NotaPK();
    private Double value;

    public Nota(){}
    public NotaPK getId() {
        return id;
    }

    public void setUsuario(Usuario usuario){
        id.setUsuario(usuario);
    }

    public void setFilme (Filme filme){
        id.setFilme(filme);
    }

    public void setId(NotaPK id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public Nota(NotaPK id, Double value) {
        this.id = id;
        this.value = value;
    }

    
    
}

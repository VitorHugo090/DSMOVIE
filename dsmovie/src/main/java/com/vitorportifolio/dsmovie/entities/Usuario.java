package com.vitorportifolio.dsmovie.entities;

public class Usuario {
    private Long id; 
    private String email;

    public Usuario () {
    }
    
    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public Usuario(Long id, String email) {
        this.id = id;
        this.email = email;
    } 

}

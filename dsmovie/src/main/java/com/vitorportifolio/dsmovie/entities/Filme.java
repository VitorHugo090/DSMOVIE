package com.vitorportifolio.dsmovie.entities;

public class Filme {
    private Long id; 
    private String titulo; 
    private Double nota; 
    private Integer count; 
    private String imagem;
   
   
    public Filme(){
        
    }

    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getTitulo() {
        return titulo;
    }


    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }


    public Double getNota() {
        return nota;
    }


    public void setNota(Double nota) {
        this.nota = nota;
    }


    public Integer getCount() {
        return count;
    }


    public void setCount(Integer count) {
        this.count = count;
    }


    public String getImagem() {
        return imagem;
    }


    public void setImagem(String imagem) {
        this.imagem = imagem;
    }


    public Filme(Long id, String titulo, Double nota, Integer count, String imagem) {
        this.id = id;
        this.titulo = titulo;
        this.nota = nota;
        this.count = count;
        this.imagem = imagem;
    } 
}

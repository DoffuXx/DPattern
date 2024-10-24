export const ComputerCode = `public class Computer {
    private String cpu;
    private String ram;
    private String storage;
    
    public void setCPU(String cpu) {
        this.cpu = cpu;
    }
    
    public void setRAM(String ram) {
        this.ram = ram;
    }
    
    public void setStorage(String storage) {
        this.storage = storage;
    }
    
    @Override
    public String toString() {
        return "Computer [CPU=" + cpu + ", RAM=" + ram + ", Storage=" + storage + "]";
    }
}`;

export const ComputerBuilderCode = `public class ComputerBuilder {
    private Computer computer;
    
    public ComputerBuilder() {
        computer = new Computer();
    }
    
    public ComputerBuilder setCPU(String cpu) {
        computer.setCPU(cpu);
        return this;
    }
    
    public ComputerBuilder setRAM(String ram) {
        computer.setRAM(ram);
        return this;
    }
    
    public ComputerBuilder setStorage(String storage) {
        computer.setStorage(storage);
        return this;
    }
    
    public Computer build() {
        return computer;
    }
}`;

export const DirectorCode = `public class Director {
    private ComputerBuilder builder;
    
    public void setBuilder(ComputerBuilder builder) {
        this.builder = builder;
    }
    
    public Computer constructGamingPC() {
        return builder.setCPU("Intel i9")
                     .setRAM("32GB")
                     .setStorage("2TB SSD")
                     .build();
    }
    
    public Computer constructOfficePC() {
        return builder.setCPU("Intel i5")
                     .setRAM("8GB")
                     .setStorage("512GB SSD")
                     .build();
    }
}`;

export const BuilderDemoCode = `public class BuilderPatternDemo {
    public static void main(String[] args) {
        Director director = new Director();
        ComputerBuilder builder = new ComputerBuilder();
        director.setBuilder(builder);
        
        // Build a gaming PC
        Computer gamingPC = director.constructGamingPC();
        System.out.println("Gaming PC built: " + gamingPC);
        
        // Build an office PC
        Computer officePC = director.constructOfficePC();
        System.out.println("Office PC built: " + officePC);
    }
}`;

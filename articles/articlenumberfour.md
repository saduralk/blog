---
title: "IT Foundations: Lesson 2"
category: "Information Technology Journey"
date: "11/23/2026"
---

# IT Foundations: Lesson 2

- **Learning journey:** Information Technology and CompTIA A+ preparation
- **Lesson:** 2 - Computer hardware fundamentals
- **Level:** Beginner
- **Environment:** Windows 11 laptop
- **Main topic:** Understanding the physical components inside a computer and how they work together

Lesson two moves from the broad definition of IT into the physical components that make a computer work. The goal is not simply to memorize component names. It is to understand each component's purpose, recognize the terms used in A+ and in IT support, and develop a basic troubleshooting mindset.

## The motherboard: the central connection

The **motherboard** is the primary circuit board that connects and allows communication between a computer's internal components.

Important motherboard connections include:

- A **CPU socket** for a compatible desktop processor
- **RAM slots** for memory modules
- **PCIe slots** for components such as graphics cards and network adapters
- **M.2 connectors** for compact storage devices
- Power connectors
- Firmware chips and controllers

On a laptop, the CPU and RAM may be soldered directly onto the motherboard or system board. That generally means they cannot be upgraded through ordinary socket-based or module-based replacement.

The motherboard does not perform every task itself, but it provides the physical and electrical pathways that connect the rest of the system.

## The CPU: processing instructions

The **CPU, or Central Processing Unit**, executes instructions and performs calculations for the operating system and applications.

Each CPU core is a physical processing unit. A dual-core CPU has two cores, while an eight-core CPU has eight.

A **thread** is a sequence of work that the operating system and applications schedule for execution. Technologies such as AMD SMT and Intel Hyper-Threading allow compatible systems to handle multiple threads efficiently.

| CPU concept | Purpose |<br>
| --- | --- |<br>
| Core | A physical processing unit |<br>
| Thread | A sequence of instructions scheduled for execution |<br>
| Clock speed | The processor's operating frequency, measured in GHz |<br>
| Cache | Small, fast memory located on or near the CPU |<br>

### Clock speed

Clock speed is measured in hertz. One gigahertz represents one billion clock cycles per second.

A higher clock speed can contribute to faster performance, but it does not tell the complete story. CPU architecture, instructions per clock, core count, cache, temperatures, and workload all affect actual performance.

### CPU cache

CPU cache holds frequently used instructions and data so the processor can access them faster than it could from system RAM.

| Cache level | Typical role |<br>
| --- | --- |<br>
| L1 | Smallest and fastest; closest to processing work |<br>
| L2 | Larger and generally slower than L1 |<br>
| L3 | Largest common cache level and often shared among cores |<br>

A simple memory hierarchy is: CPU cache, RAM, and then persistent storage. Cache is the fastest, while storage is larger but much slower.

## RAM: active working memory

**RAM, or Random Access Memory**, temporarily holds data and instructions that applications and the CPU need to access quickly.

RAM is volatile: its contents are cleared when power is lost. For example, a game may keep active world data, character positions, nearby objects, and loaded assets in RAM while the game is running.

RAM capacity is measured in gigabytes.

| Capacity | Typical use |<br>
| --- | --- |<br>
| 4 GB | Very basic computing |<br>
| 8 GB | Basic everyday computing |<br>
| 16 GB | General-purpose computing and gaming |<br>
| 32 GB | Heavy multitasking and demanding applications |<br>
| 64 GB | Professional workloads, virtualization, and extensive multitasking |<br>

These are general guidelines. Actual requirements depend on the operating system and the applications being used.

### RAM generations and formats

The major DDR generations include DDR3, DDR4, and DDR5. These generations are not interchangeable because they use different physical designs and electrical characteristics.

- **DIMM:** Commonly used in desktop computers
- **SO-DIMM:** Smaller format commonly used in laptops
- **Soldered RAM:** Installed directly on the system board and usually not replaceable

Before replacing or upgrading RAM, a technician must confirm the supported generation, capacity, speed, and physical format.

## Storage: persistent data

Storage retains data after the computer loses power. It holds the operating system, applications, documents, pictures, videos, and games.

### HDD: hard disk drive

An HDD stores data magnetically on spinning disks called platters. A mechanical read/write head moves across the platters to access information.

HDD advantages and characteristics include:

- Low cost per gigabyte
- Large available capacities
- Moving mechanical components
- Generally slower operation than SSDs
- Greater vulnerability to physical shock while operating

### SSD: solid state drive

An SSD stores data in flash memory. It has no spinning platters or mechanical read/write heads.

SSD characteristics include:

- Fast data access
- Better resistance to physical shock
- Lower moving-part failure risk
- Lower power use in many designs

SSDs are available in different form factors and interfaces.

### SATA vs. NVMe

**SATA** is a storage interface commonly used with both 2.5-inch and M.2 drives. It often uses the AHCI protocol.

**NVMe** is a storage protocol designed to communicate with flash storage over high-speed PCIe connections.

These terms describe different categories:

| Term | Describes |<br>
| --- | --- |<br>
| M.2 | A physical connector and form factor |<br>
| SATA | A storage interface and, in some contexts, a protocol arrangement |<br>
| NVMe | A storage communication protocol |<br>
| PCIe | A high-speed interconnection used by NVMe and expansion cards |<br>

An M.2 SSD may use SATA or NVMe. M.2 and NVMe are therefore not interchangeable terms.

## The GPU: parallel graphics processing

A **GPU, or Graphics Processing Unit**, processes large numbers of calculations in parallel. It is especially useful for graphics, games, video rendering, artificial intelligence, and other workloads that benefit from parallel processing.

### Integrated vs. dedicated graphics

| Integrated GPU | Dedicated GPU |<br>
| --- | --- |<br>
| Built into or near the CPU package | A separate graphics processor |<br>
| Uses system RAM or shared memory | Uses dedicated VRAM |<br>
| Generally more power-efficient | Generally supports more demanding graphics workloads |<br>
| Suitable for everyday graphics | Suitable for gaming and professional graphics |<br>

**VRAM, or Video RAM**, is memory reserved for graphics-related information such as textures, frame buffers, and rendering assets.

For graphics problems, an IT technician should check:

- Graphics drivers
- GPU temperatures
- GPU and VRAM utilization
- Power delivery
- Application and operating system compatibility
- Driver settings or configuration

The problem may be software or thermal rather than a failed graphics component.

## Power and cooling

### Power Supply Unit

A desktop **Power Supply Unit (PSU)** converts AC power from a wall outlet into DC power used by computer components.

Important power terms include:

| Term | Meaning |<br>
| --- | --- |<br>
| Watt | A unit of power |<br>
| Voltage | Electrical potential difference |<br>
| Amperage | Electrical current |<br>
| 80 PLUS | A PSU efficiency certification |<br>

A laptop does not normally use a desktop-style PSU. It uses an external AC adapter and internal power-management circuitry to deliver power and charge the battery.

### Cooling

The CPU and GPU generate heat while operating. Excess heat can trigger **thermal throttling**, in which a component reduces performance to prevent damage.

Common cooling methods include:

- A **heat sink** to absorb and spread heat
- **Fans** to move air through the system
- **Thermal paste** to improve heat transfer between a processor and cooler
- **Liquid cooling** in some desktop systems

When performance drops after several minutes of use, a technician should investigate temperatures, fan operation, dust, blocked vents, airflow, and the condition of the cooling system.

## BIOS and UEFI

**Firmware** is specialized software stored on a hardware device. On modern motherboards, it initializes hardware and starts the boot process.

### BIOS

**BIOS, or Basic Input/Output System**, is older motherboard firmware that initializes hardware and begins startup.

### UEFI

**UEFI, or Unified Extensible Firmware Interface**, is modern firmware that replaces or supersedes traditional BIOS in many systems.

UEFI can provide:

- Support for modern boot configurations
- Secure Boot
- Large boot drive support through GPT
- A flexible firmware setup interface

People often call the UEFI setup screen “the BIOS,” but UEFI and traditional BIOS are different technologies.

## The simplified boot process

The startup process follows a general sequence:

1. The system receives power.
2. BIOS or UEFI initializes the hardware.
3. Firmware performs startup checks, often referred to collectively as **POST**, or Power-On Self-Test.
4. The firmware selects a boot device.
5. The bootloader loads the operating system.
6. Windows starts its kernel, drivers, and system services.
7. The sign-in screen becomes available.

POST can identify certain hardware initialization problems. A system that produces beep codes or startup error messages may be reporting a POST-related issue.

## How everything works together

Opening a game demonstrates how the major components cooperate:

| Step | Component | Role |<br>
| --- | --- | --- |<br>
| 1 | SSD | Stores the game and supplies its files |<br>
| 2 | RAM | Holds active game data |<br>
| 3 | CPU | Executes game instructions |<br>
| 4 | GPU | Processes graphics and renders frames |<br>
| 5 | Monitor | Displays the final output |<br>

The motherboard connects these components, drivers allow Windows to communicate with hardware, the power system supplies electricity, cooling controls temperatures, and firmware performs initialization during startup.

No single component makes the whole system work alone. A symptom can involve more than one area, and effective troubleshooting begins by distinguishing symptoms from their underlying causes.

## What I learned

This lesson established the major internal components of a computer and gave me a stronger vocabulary for hardware support:

1. The motherboard connects and coordinates the system's components.
2. The CPU executes instructions and is evaluated using factors beyond clock speed alone.
3. RAM holds temporary active data and does not replace persistent storage.
4. Storage retains data, and SSD/HDD, SATA/NVMe, and M.2 are not interchangeable concepts.
5. The GPU accelerates graphics and other parallel workloads.
6. Power and cooling keep the system operating safely.
7. BIOS/UEFI initializes hardware before Windows starts.
8. A complete troubleshooting process must consider hardware, software, configuration, power, and temperature.

---
title: "IT Foundations: Lesson 3"
category: "Information Technology Journey"
date: "11/24/2026"
---

# IT Foundations: Lesson 3

- **Learning journey:** Information Technology and CompTIA A+ preparation
- **Lesson:** 3 - Computer networking fundamentals
- **Level:** Beginner
- **Environment:** Windows 11
- **Goal:** Build toward an IT position by February 2027
- **Main topic:** How devices connect, communicate, and access the internet

Lesson three moves from computer hardware to networking. The goal is to understand the purpose of networks, recognize common networking devices, and become comfortable with basic Windows networking tools.

Networking is essential for IT support because many problems begin with a simple question: **Is the device connected, or can it reach the resource it needs?**

## What is a computer network?

A **computer network** is a group of two or more devices that communicate and share information or resources.

Common network devices include:

- Desktop computers and laptops
- Smartphones and tablets
- Printers
- Servers
- Smart TVs and gaming consoles
- Routers and switches

At home, a laptop, phone, printer, and smart TV may share the same network. In a business, computers and servers can share databases, applications, files, printers, and internet access.

## Why networks exist

Networks allow devices to:

1. **Share files**

2. **Share resources**, such as printers

3. **Communicate** through email, messages, and video calls

4. **Access the internet**

5. **Connect to centralized systems**, including company servers and databases


For example, a company does not need a separate printer for every employee. It can place shared printers on the network so employees can print from their own computers.

## LAN vs. WAN

| Term | Meaning | Example |
\
| --- | --- | --- |
\
| LAN | Local Area Network; a network in a small geographic area | A home, office, school, or building |
\
| WAN | Wide Area Network; networks connected across large geographic areas | Offices connected across Indiana, California, and New York |

The internet is the world's largest WAN: it is a massive network of interconnected networks.

A simple way to remember them:

- **LAN = Local**
- **WAN = Wide**

Wi-Fi and LAN are not synonyms. Wi-Fi is a wireless technology used to connect devices to a LAN.

## Routers and switches

Routers and switches both move network data, but they perform different jobs.

### Switch

A **network switch** connects multiple devices within a local network. It allows devices on the same LAN to communicate with one another.

In an office, computers, printers, and servers may connect to switches using Ethernet cables.

A switch primarily uses **MAC addresses** to decide where to deliver Ethernet frames within the local network.

### Router

A **router** connects different networks and forwards data between them.

A home router connects the home's local network to the internet service provider's network. It also provides a path for traffic traveling from a device to resources outside the LAN.

A router primarily uses **IP addresses** to determine where network traffic should go.

| Device | Main job |
\
| --- | --- |
\
| Switch | Connects devices within a LAN |
\
| Router | Connects one network to another |

This office-building analogy may help:

- The **switch** is like an internal mailroom that sends packages to the correct department.
- The **router** is like an external shipping department that sends packages outside the building.

Many home devices combine a router, Ethernet switch, wireless access point, and modem into one physical box. The combined hardware may make them look like a single device even though they perform several different networking roles.

## Ethernet vs. Wi-Fi

### Ethernet

**Ethernet** is a wired networking connection that usually uses an Ethernet cable.

Advantages include:

- Consistent and reliable performance
- Often lower latency
- Less interference from nearby wireless devices

### Wi-Fi

**Wi-Fi** is a wireless networking technology that uses radio waves.

Advantages include:

- Convenience and mobility
- No cable needed
- Easy connection for phones and laptops

The better choice depends on the situation:

- A desktop that needs a stable connection may use Ethernet.
- A phone may use Wi-Fi for mobility.
- A laptop may use Ethernet or Wi-Fi.

In troubleshooting, connecting a suspect laptop by Ethernet can help determine whether the problem comes from Wi-Fi or from the wider network connection.

## IP addresses and MAC addresses

### IP address

An **IP address** is a logical address used to identify a device's network connection and route data across networks.

IPv4 addresses contain four numbers separated by periods. Each number ranges from 0 to 255.

Example:

```text
192.168.1.25
```

The router may assign a laptop `192.168.1.25` and a phone `192.168.1.26`.

**IPv6** is the newer addressing system with much larger address capacity. An IPv6 address can look like:

```text
2001:db8:85a3::8a2e:370:7334
```

The important beginner goal is to recognize that IPv4 and IPv6 are both IP addressing systems.

### MAC address

A **MAC address** is an identifier associated with a network interface.

Example:

```text
A4:5E:60:12:AB:CD
```

| Concept | Purpose |
\
| --- | --- |
\
| IP address | Logical address used to identify a network destination |
\
| MAC address | Link-layer identifier used for local network delivery |

One analogy:

- **IP address:** The mailing address for a current destination
- **MAC address:** The identifier associated with a specific network interface

MAC addresses can be changed or randomized by operating systems or privacy settings, so they should not be treated as permanently unchangeable serial numbers.

## Modems and wireless access points

### Modem

A **modem** connects a home or business to an internet service provider using the provider's network technology.

For example, a cable modem connects to a cable internet service. Other modems may use DSL, fiber, or cellular technology.

### Wireless access point

A **wireless access point (AP)** allows wireless devices to connect to a wired network using Wi-Fi.

Businesses often install multiple access points to provide coverage throughout a building. Larger locations may require carefully placed access points, not just a more powerful router.

### Typical home setup

1. The internet service provider supplies an internet connection.
2. The modem connects to the provider.
3. The router connects the local network to the outside network.
4. The access point provides Wi-Fi.
5. Phones, laptops, and other devices connect wirelessly or by Ethernet.

In many homes, the modem and router are built into the same physical device. In an office, they may be separate pieces of equipment.

## How opening a website works

Opening a website involves several steps:

1. The laptop connects to the local network through Ethernet or Wi-Fi.
2. The router forwards traffic toward the internet.
3. **DNS** translates the website's domain name into an IP address.
4. The laptop sends a request to the server hosting the website.
5. The server returns the requested information.
6. The browser displays it.

Important preview terms:

| Term | Meaning |
\
| --- | --- |
\
| DNS | Domain Name System; translates names such as `example.com` into IP addresses |
\
| DHCP | Dynamic Host Configuration Protocol; automatically assigns network settings to devices |
\
| TCP/IP | A family of protocols that enables communication across networks |

These services and protocols are the foundation of modern networking. They will be studied in more detail in later lessons.

## Practical lab: inspect a Windows 11 network

This lab uses Command Prompt to inspect the current network configuration.

### Step 1: Open Command Prompt

1. Press `Windows + R`.
2. Type `cmd`.
3. Press Enter.

### Step 2: Find IP settings

Run:

```cmd
ipconfig
```

Look for the adapter currently in use:

- `Wireless LAN adapter Wi-Fi`
- `Ethernet adapter Ethernet`

Find these fields:

| Field | Meaning |
\
| --- | --- |
\
| IPv4 Address | The device's logical IPv4 address |
\
| Subnet Mask | Helps determine which addresses belong to the local network |
\
| Default Gateway | The router or next-hop address used to reach other networks |

The IPv4 address might be `192.168.1.25`, and the default gateway might be `192.168.1.1`. Those values vary by network.

### Step 3: Find the MAC address

Run:

```cmd
getmac
```

For more detailed adapter information, run:

```cmd
ipconfig /all
```

Windows labels the MAC address as the **Physical Address**.

### Step 4: Test connectivity

First find the Default Gateway address from `ipconfig`, then test it:

```cmd
ping 192.168.1.1
```

Replace `192.168.1.1` with the actual gateway address.

Next test a public IP address:

```cmd
ping 1.1.1.1
```

Finally test DNS and internet name resolution:

```cmd
ping google.com
```

`ping` sends an ICMP Echo Request and checks for a reply. It is useful for quick troubleshooting, but a blocked ping does not prove that every network service is down.

### Troubleshooting notes

| Test | If it works | If it fails |
\
| --- | --- | --- |
\
| Ping the default gateway | Local network path to the router works | Check the Wi-Fi/Ethernet adapter and local connection |
\
| Ping a public IP | Router and internet routing may work | Check internet routing or ISP connectivity |
\
| Ping a domain name | DNS resolution is likely working | Test DNS and name-resolution settings |

This is why an IT technician should test in layers instead of immediately replacing equipment.

## Privacy note

Before sharing network lab results, redact public IP addresses, MAC addresses, account names, and any other identifying network information. General results such as adapter type or whether the gateway replied are enough for learning and discussion.

## What I learned

Lesson three gave me a foundational vocabulary for computer networking:

1. Networks allow devices to communicate and share resources.
2. LANs cover local areas; WANs cover large geographic areas.
3. Switches connect devices within a LAN.
4. Routers forward traffic between networks.
5. Ethernet is wired; Wi-Fi is wireless.
6. IP addresses identify network destinations, while MAC addresses identify local network interfaces.
7. Modems connect to an ISP; access points provide Wi-Fi coverage.
8. DNS, DHCP, and TCP/IP support the modern internet.
9. `ipconfig`, `getmac`, and `ping` are useful for basic Windows network troubleshooting.

These fundamentals help me move closer to being able to diagnose problems systematically and prepare for CompTIA A+ networking concepts. My goal is to continue building these skills consistently and become employable in IT by February 2027.

---
title: "IT Foundations: Lesson 4"
category: "Information Technology Journey"
date: "11/25/2026"
---

# IT Foundations: Lesson 4

- **Learning journey:** Information Technology and CompTIA A+ preparation
- **Lesson:** 4 - Networking deeper dive
- **Level:** Intermediate beginner
- **Environment:** Windows 11
- **Goal:** Build toward an IT position by February 2027
- **Main topic:** Subnet masks, DHCP, DNS, TCP, UDP, and network ports

Lesson four continues where lesson three stopped. The goal is to understand how a Windows computer uses network configuration, how services automatically assign settings, how names become IP addresses, and how applications communicate through specific ports.

These topics are important for IT troubleshooting. Many network problems can be narrowed down by testing the local subnet, DHCP configuration, DNS resolution, routing, and the application transport protocol.

## Subnet masks

A **subnet mask** helps a computer determine which portion of an IP address identifies the network and which portion identifies an individual host.

A useful analogy is an office building:

- The network portion is like the building's street address.
- The host portion is like the apartment number.

The street address identifies the building, while the apartment number identifies a specific destination inside it.

### Example network configuration

| Setting | Example |
| --- | --- |
| IPv4 address | `192.168.1.25` |
| Subnet mask | `255.255.255.0` |
| Default gateway | `192.168.1.1` |

The subnet mask `255.255.255.0` means the first three sections, `192.168.1`, identify the network. The final section identifies the host.

Therefore:

- `192.168.1.40` is on the same local subnet.
- `192.168.2.40` is on a different subnet.

### Local versus routed traffic

When a computer sends traffic:

1. It checks whether the destination is on its local subnet.
2. If the destination is local, it communicates directly through the local network.
3. If the destination is outside the local subnet, it sends the traffic to the default gateway.

The default gateway is usually the local router.

### CIDR notation

Subnet masks can also be written using **CIDR notation**, where a slash and number indicate how many leading bits identify the network.

| Subnet mask | CIDR notation |
| --- | --- |
| `255.255.255.0` | `/24` |
| `255.255.0.0` | `/16` |
| `255.0.0.0` | `/8` |

The two formats describe the same concept. For now, it is enough to recognize that `255.255.255.0` and `/24` are equivalent.

## DHCP

**DHCP, or Dynamic Host Configuration Protocol**, automatically provides devices with network settings.

Typical DHCP settings include:

- IPv4 address
- Subnet mask
- Default gateway
- DNS server

Without DHCP, a user might need to enter all of these settings manually. On a typical home or office network, DHCP provides and maintains the configuration automatically.

### The DORA process

DHCP commonly uses a four-step process called **DORA**:

| Step | Meaning |
| --- | --- |
| Discover | The device asks for a DHCP server |
| Offer | The server offers an available IP configuration |
| Request | The device requests the offered configuration |
| Acknowledge | The server confirms the assignment |

### Hotel analogy

The DHCP process resembles checking into a hotel:

1. You ask whether a room is available.
2. The receptionist offers you Room 205.
3. You accept the room.
4. The receptionist confirms the reservation.

The computer follows a similar cycle when it joins a network.

### DHCP leases

A DHCP assignment is commonly called a **lease** because it remains valid for a specific period.

The device and server can renew the lease before it expires. A renewed lease allows the device to continue using its address.

### DHCP failure

Windows may assign an address in the range:

```text
169.254.x.x
```

This is an **APIPA, or Automatic Private IP Addressing**, address. It indicates that the computer could not obtain usable IPv4 settings from a DHCP server.

Possible troubleshooting areas include:

- Whether the router or DHCP server is functioning
- Whether the device can communicate with the local network
- Whether the DHCP address pool is exhausted
- Whether the network adapter or switch port is malfunctioning

`169.254.x.x` is a useful clue, but it does not identify the exact cause by itself.

## DNS

**DNS, or Domain Name System**, translates human-readable domain names into IP addresses.

For example:

| Domain name | Network destination |
| --- | --- |
| `google.com` | One or more associated IP addresses |
| `microsoft.com` | One or more associated IP addresses |
| `wikipedia.org` | One or more associated IP addresses |

DNS is similar to a phone's contact list. A person remembers a name instead of every phone number, and the phone looks up the number when needed.

Likewise, a user enters a domain name, and DNS helps the computer find the associated server address.

### How name resolution is used

When a browser opens `www.google.com`, the computer may need to:

1. Ask a configured DNS server for the domain's IP address.
2. Receive one or more addresses.
3. Connect to one of those addresses.
4. Receive the website content.

The addresses associated with a domain can change, and a domain can have several associated addresses. DNS does not guarantee that the browser uses only one IP address.

### DNS troubleshooting

A computer can communicate with an external IP address, such as `1.1.1.1`, but fail to open websites by domain name. This pattern suggests DNS resolution may be failing.

Windows includes `nslookup`, a command for querying DNS:

```cmd
nslookup google.com
```

The command output can show:

- The DNS server being queried
- The IP address or addresses returned
- Whether name resolution succeeded

If `nslookup google.com` works but a browser still cannot open the site, the problem may involve another network or application layer rather than DNS itself.

## TCP and UDP

IP addresses identify devices and route traffic between networks. **Ports** identify a service or application endpoint on a device.

A short analogy:

- IP address = apartment building address
- Port number = apartment number
- Application or service = the resident receiving the information

For example, a web server commonly listens for secure HTTPS traffic on port 443. The destination IP identifies the server, while the destination port identifies the HTTPS service.

### TCP

**TCP, or Transmission Control Protocol**, is connection-oriented and tracks delivery.

TCP characteristics include:

- Reliability
- Delivered data in order
- Retransmission of lost data
- A connection setup and teardown process

TCP is useful for activities that require complete or ordered data, such as file transfers and many web connections.

### UDP

**UDP, or User Datagram Protocol**, is connectionless.

UDP characteristics include:

- Lower overhead
- No built-in delivery guarantee
- No built-in retransmission by the transport protocol
- No built-in ordering mechanism

UDP is often used for real-time voice, video, and gaming updates. In some applications, speed matters more than retransmitting old or late information.

TCP and UDP are not competing choices for every situation. They are different tools selected according to application requirements.

The delivery analogy:

- **TCP** is like tracked mail that confirms delivery and handles lost packages.
- **UDP** is like a postcard sent without the same tracking and recovery process.

## Common network ports

For CompTIA A+, a student should become familiar with several common ports.

| Port | Protocol or service | Typical purpose |
| --- | --- | --- |
| 20/21 | FTP | File transfer |
| 22 | SSH | Secure remote administration |
| 23 | Telnet | Unencrypted remote administration |
| 25 | SMTP | Sending email |
| 53 | DNS | Domain name resolution |
| 67/68 | DHCP | Automatic IP configuration |
| 80 | HTTP | Standard web traffic |
| 110 | POP3 | Receiving email |
| 143 | IMAP | Receiving and synchronizing email |
| 443 | HTTPS | Secure web traffic |
| 3389 | RDP | Windows Remote Desktop |

Important exceptions and details:

- DNS commonly uses UDP port 53, but can use TCP in certain situations.
- DHCP uses UDP ports 67 and 68.
- HTTPS commonly uses TCP port 443, although HTTP/3 uses QUIC over UDP.
- FTP uses TCP ports 20 and 21.

It is not necessary to memorize every port immediately. The goal is to recognize common examples and use the table as a reference.

## Practical lab: network services investigation

The following exercises use Windows 11 Command Prompt.

### Exercise A: inspect network configuration

Run:

```cmd
ipconfig /all
```

Look for:

- IPv4 Address
- Subnet Mask
- Default Gateway
- DHCP Enabled
- DHCP Server
- DNS Servers

**Task:** Find the subnet mask associated with the active Wi-Fi or Ethernet adapter.

Answers may include `255.255.255.0` or a different mask. That depends on the network configuration.

If DHCP is enabled, Windows received network settings through DHCP or has a fallback configuration. If DHCP is disabled, settings may have been configured manually.

### Exercise B: investigate DNS

Run:

```cmd
nslookup google.com
```

Look for:

- The DNS server being queried
- The returned IP address or addresses

**Task:** Determine whether Windows successfully resolves Google's domain name.

If it fails, possible causes include an unavailable DNS server, incorrect DNS settings, blocked DNS traffic, or a loss of internet connectivity.

### Exercise C: check network connections

Run:

```cmd
netstat -ano
```

This command displays active network connections and listening ports.

| Column | Meaning |
| --- | --- |
| Proto | TCP or UDP |
| Local Address | The local IP address and port |
| Foreign Address | The remote IP address and port |
| State | TCP connection status, when applicable |
| PID | Process ID associated with the connection |

Examples of states include:

- `ESTABLISHED`: a TCP connection is active
- `LISTENING`: a process is waiting for incoming connections
- `TIME_WAIT`: a completed TCP connection is waiting before the socket can be reused

Do not try to understand every entry immediately. This lab is for recognizing how Windows represents local ports, remote endpoints, protocols, states, and process IDs.

### Exercise D: use the process ID

To identify the program associated with a PID, open Task Manager:

1. Press `Ctrl + Shift + Esc`.
2. Open the **Details** tab.
3. Match the PID column with the PID from `netstat -ano`.

The association can help determine which application is using a connection or listening on a port.

## Troubleshooting strategy

The commands from this lesson separate the network into testable layers:

| Problem | Useful command or setting |
| --- | --- |
| Wrong local configuration | `ipconfig /all` |
| DHCP failure | Check DHCP Server and for `169.254.x.x` |
| DNS failure | `nslookup` |
| TCP or UDP connections | `netstat -ano` |
| Router communication | `ping <default gateway>` |
| External IP communication | `ping <public IP>` |

A technician should test in sequence instead of assuming the first visible issue is the cause.

For example:

1. Verify that the adapter has an address and subnet.
2. Confirm communication with the gateway.
3. Test a public IP address.
4. Test domain name resolution.
5. Determine whether the issue affects the whole device or one application.

## Privacy note

Before sharing network lab results, redact public IP addresses, MAC addresses, host names, account names, and other identifying information. Adapter names, subnet types, and general command results are enough for study and troubleshooting discussion.

## What I learned

Lesson four expanded my networking fundamentals:

1. A subnet mask separates the network and host portions of an IP address.
2. CIDR notation, such as `/24`, provides a shorter way to describe a subnet mask.
3. DHCP automatically assigns IP address and network settings through DORA.
4. An APIPA address such as `169.254.x.x` suggests a DHCP problem.
5. DNS translates domain names into IP addresses.
6. `nslookup` can test domain name resolution.
7. IP addresses identify devices, while ports identify services or application endpoints.
8. TCP provides ordered and retransmitted delivery; UDP favors lower overhead and real-time communication.
9. Common ports include 21, 22, 25, 53, 80, 443, and 3389.
10. `ipconfig /all`, `nslookup`, and `netstat -ano` provide different views of Windows network behavior.

This lesson is another step toward building systematic troubleshooting skills and becoming employable in IT by February 2027.

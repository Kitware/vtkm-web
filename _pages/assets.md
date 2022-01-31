---
title: Assets
permalink: /assets

# Define anchor links to page sections
sections:
  - name: Highlights
    anchor: '#highlights'
  - name: Presentations
    anchor: '#presentations'
  - name: Logos
    anchor: '#logos'

---

# Highlights

Below is a selected list of highlights generated for VTK-m related R&D.

<table>

<tr>
<td markdown="1">
[**VTK-m Demonstrates Performance Portability**](https://docs.google.com/presentation/d/1hoUPhrZgd6jhPuYR4dC7NEOytu7jKDTz/view?usp=sharing&ouid=116647203761758154126&rtpof=true&sd=true){:target="_blank"}  
A literature survey reveals VTK-m algorithms run as efficiently as targeted implementations.
When comparing an algorithm implemented in VTK-m to an algorithm written for a specific device, one would expect the targeted algorithm to run faster than the general VTK-m implementation.
But in reviewing peer-reviewed papers providing such a comparison, on average the general VTK-m algorithm performed about the same as the targeted implementation.
</td>
<td markdown="1" width="332">
![Performance Portability](/img/highlight-thumbnails/VTKm-MCD3-Portability.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**In Situ Vector Field Reduction Using Lagrangian Basis Flows**](https://drive.google.com/file/d/1tF0OYWwttFsAy81CJbL9-kwxFhOWShIg/view?usp=sharing){:target="_blank"}  
Lagrangian Basis Flows are an alternate representation of flow fields that record displacement rather than velocity.
VTK-m is used to compute Lagrangian Basis Flows in situ with simulation to reduce I/O demands and improve post hoc analysis accuracy.
</td>
<td markdown="1" width="332">
![Lagrangian Basis Flows](/img/highlight-thumbnails/Lagrangian-Basis-Flows-2021.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**In Situ Visualization in WDMApp Using VTK-m**](https://drive.google.com/file/d/1Bg-QwjTuF3aWrtNVbcXxtZaSyK7RXXC3/view?usp=sharing){:target="_blank"}  
Integrating VTK-m with simulations for the planned experimental ITER fusion reactor.
Images are generated in situ while the simulation is running.
</td>
<td markdown="1" width="332">
![WDMApp](/img/highlight-thumbnails/VTKm-WDMApp-Highlight.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**Flow Visualization in WarpX Laser Wakefield Simulations**](https://drive.google.com/file/d/1UbunYc8QTpuwp8wTxxxP6HwJHNTjcB_3/view?usp=sharing){:target="_blank"}  
Unlike for a typical fluid velocity field, particle trajectories for relativistic plasma and accelerator physics must be inferred from electromagnetic fields as well as the particles' momentum.
VTK-m's particle tracing was customize for the specifics of WarpX particle trajectories.
</td>
<td markdown="1" width="332">
![WarpXFlow](/img/highlight-thumbnails/VTKm-WarpX-Flow-Highlight-2020.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**In Situ/In Transit Visualization with WarpX**](https://drive.google.com/file/d/14R28oecCSP0CskxCCMNX12R15FJ56-IK/view?usp=sharing){:target="_blank"}  
VTK-m was used to perform in situ visualization and rendering during a simulation of a 10-stage laser-wakefield accelerator.
The simulation was run on 600 GPUs on Summit at OLCF.
This visualization was featured during the keynote talk of [ISAV 2020](https://vis.lbl.gov/events/ISAV2020/){:target="_blank"}.
</td>
<td markdown="1" width="332">
![WarpXInSitu](/img/highlight-thumbnails/VTKm-WarpX-In-Situ-2020.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**Large-Scale In Situ Visualization of  Raleigh-Taylor Instability with Ascent and VTK-m**](https://drive.google.com/file/d/1PxJVq6aIXWQc22WFiEkzcEnuz9NZFcAm/view?usp=sharing){:target="_blank"}  
Coupled to a simulation through Ascent, VTK-m visualized a 97.8 billion element Raleigh-Taylor instability simulation on 4096 nodes of the Sierra computer at Lawrence Livermore National Laboratory.
</td>
<td markdown="1" width="332">
![Raleigh-Talylor](/img/highlight-thumbnails/VTKm-Reyleigh-Taylor-Sierra-2018.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**Scientific Discovery via Visualization Using Accelerated Computing**](https://drive.google.com/file/d/1uLrltKqKv1CIZdNIYl25ij-kxif5ehG4/view?usp=sharing){:target="_blank"}  
A short retrospective and timeline of the origins of VTK-m.
</td>
<td markdown="1" width="332">
![History](/img/highlight-thumbnails/HighlightVTKmECPFlavor2017.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**Enabling in situ visualization of petascale time-dependent CFD simulations**](https://drive.google.com/file/d/1v6teJjHniex6g7_knyrvdI57e2h8oNBI/view?usp=sharing){:target="_blank"}  
Coupled to a PyFR CFD simulation through ParaView/Catalyst, VTK-m was used to visualize flow over a low pressure turbine linear cascade.
The simulation was done in situ with the simulation with the data remaining entirely on the GPU for maximum efficiency and performance.
</td>
<td markdown="1" width="332">
![PyFR](/img/highlight-thumbnails/PyFRHighlight2017.jpg)
</td>
</tr>

<tr>
<td markdown="1">
[**Live Demonstration of In Situ Visualization on Accelerator Processors**](https://drive.google.com/file/d/1Ska_dYp3CPF_xIdYEbLWibA3H59zX52L/view?usp=sharing){:target="_blank"}  
A demonstration of live in situ visualization on the Titan supercomputer.
PyFR, a CFD simulation that was coupled with ParaView/Catalyst, ran on 256 GPUs of the Titan supercomputer at Oak Ridge National Laboratory, visualized its results with VTK-m, and displayed its results on a live client application running at the SC 2015 show floor.
</td>
<td markdown="1" width="332">
![In Situ Live](/img/highlight-thumbnails/HighlightVTKmInSituLive2015.jpg)
</td>
</tr>

</table>

---

# Presentations
Here is a list of presentations about VTK-m for your reference.
- [VTK-m: What it is, Why we need it, and How to use
  it](https://drive.google.com/file/d/15fOt1Bu5uVpGwK0xS-htwakWN7cuAEBS/view?usp=sharing){:target="_blank"} (November 2021) ([slides](https://docs.google.com/presentation/d/1LPJOJ8sXHGHUyiglAOX0TJmNZBU5FMie/edit?usp=sharing&ouid=116647203761758154126&rtpof=true&sd=true){:target="_blank"})
- [Enabling Visualization on Exascale Accelerators with VTK-m](https://drive.google.com/file/d/16dYZFHv9zHGCZmKoBNX8c_W-li1mvrvM/view?usp=sharing){:target="_blank"} at RAPIDS2-DU Monthly Meeting (July 14, 2021)
- [VTK-m Update](https://drive.google.com/file/d/1ZKJNJNJGG4ixIAtw64NPhI95QUbpeMxh/view?usp=sharing){:target="_blank"} at DOECGF (April 2021)
- [VTK-m Update](https://drive.google.com/file/d/11P6pa-RtzKbX4nGsTD_YBJLP11IXOg_v/view?usp=sharing){:target="_blank"} at DOECGF (April 2020)
- [ECP/VTK-m poster](https://drive.google.com/file/d/1UAXwcZaDbwTVBGqByGR3YuxOxjWEa1W0/view?usp=sharing){:target="_blank"} (ECP Annual Meeting, February 2020)
- [Simulating and Visualizing Turbulent Fluid Mixing
using 16,384 GPUs on LLNL's Sierra Supercomputer](https://drive.google.com/file/d/1vR6ctAr8_hH_-oyIHBoqx9IrZKe5eE8i/view?usp=sharing){:target="_blank"} as part of panel on VTK-m at scale at DOECGF (April 2019)
- [VTKm at Scale: Experiences from a Recent In Situ Research Project](https://drive.google.com/file/d/1wC7nUQORiWjC2EOq7XQubY4b_CWV8KqN/view?usp=sharing){:target="_blank"} as part of panel on VTK-m at scale at DOECGF (April 2019)
- [VTK-m Update](https://drive.google.com/file/d/1CBX5RhsSRyuWK9NsfHEJq-gHhs4HpgqL/view?usp=sharing){:target="_blank"} at DOECGF (April 2019)
- [VTK-m: Lessons from Building a Visualization Toolkit for Massively Threaded Architectures](https://drive.google.com/file/d/1eadMYNYE4Dd_rG0LoLh8o5zEy4HSBWj8/view?usp=sharing){:target="_blank"} (NVIDIA - GTC, March 20, 2019)
- [Brief tutorial at ECP Annual Meeting](https://drive.google.com/file/d/1fWYlF7us7iW0Z2RBR_9T4eEiIHqkFmKp/view?usp=sharing){:target="_blank"} (January 2019)
- [ECP/VTK-m poster](https://drive.google.com/file/d/14bK4MWhROmmFTOl8myws0AitN4-_KfrX/view?usp=sharing){:target="_blank"} (ECP Annual Meeting, January 2019)
- [VTK-m Update](https://drive.google.com/file/d/1Dd7mNOFSjFZHiEo0kCYiOvIB9Pv56YOG/view?usp=sharing){:target="_blank"} at DOECGF (April 2018)
- [Data Analysis and Visualization Mini-Symposium](https://drive.google.com/file/d/1g5tK8mdUwPmmYhfbJa2fuUQS9DJg549-/view?usp=sharing){:target="_blank"} (February 2018)
- [Brief tutorial at ECP Annual Meeting](https://drive.google.com/file/d/1r13fwISB1uz0E3lC_K7YMwCm4cj0I5D7/view?usp=sharing){:target="_blank"} (February 2018)
- [Presentation at Kitware Booth, SC17](https://drive.google.com/file/d/1FxyIxUpz2Oi7vyXoFtcmBAUiOnN1P9Cj/view?usp=sharing){:target="_blank"} (November 2017)
- [Intel HPC Developer Conference VTK-m Status Update](https://drive.google.com/file/d/1aRRArtIWTSxUyErwq9Urrdz9jeBMIxW3/view?usp=sharing){:target="_blank"}
- [VTK-m Highlight Prepared for SDAV](https://drive.google.com/file/d/1sTRSh0SF5x3pICda-QUpmMfj2PYgYYPG/view?usp=sharing){:target="_blank"}
- [ECP/VTK-m poster](https://drive.google.com/file/d/10A-oceNzwVYBNkZpuY5p1R4bEg-gO9b9/view?usp=sharing){:target="_blank"} (ECP Annual Meeting, January 2017)
- [DOE Visualization Software](https://drive.google.com/file/d/1hJQTwrNZIK5I3tgqsVJoTfQ_i8m4fE5f/view?usp=sharing){:target="_blank"} (ECP Annual Meeting, January 2017)
- [VTK-m: Accelerating the Visualization Toolkit for Massively Threaded Architectures](https://docs.google.com/presentation/d/1xbWdBKZn-l-yuB8IJ9R7yAqU_f2V5BmH/edit?usp=sharing&ouid=116647203761758154126&rtpof=true&sd=true){:target="_blank"} (IEEE VIS, October 27, 2016)
- [VTK-m: Accelerating the Visualization Toolkit for Massively Threaded Architectures](https://drive.google.com/file/d/1wHSL6Hl8MdPhBr4OYq83f5LZHddvp537/view?usp=sharing){:target="_blank"}, DOECGF 2016
- [Adapting the Visualization Toolkit for Many-Core Processors with the VTK-m Library](https://drive.google.com/file/d/1xPN2BB5liH1YsTe481vcfhuychb1zhsr/view?usp=sharing){:target="_blank"} (NVIDIA GTC, - April 6, 2016)
- [SC15 Kitware Booth Presentations](/img/presentations/SC15_Kitware_Booth_Presentations){:target="_blank"} (November 17-19, 2015)
- [VTK-m: Building a Visualization Toolkit for Massively Threaded Architectures](https://drive.google.com/file/d/1Nhj4kT6EqEilGBIJx3-DvrvhbYFhWl3A/view?usp=sharing){:target="_blank"} (November 16, 2015)
- [VTK-m Overview for Intel Design Review](https://drive.google.com/file/d/1m8AdBp8i5cBD_6LyW5UU-pdDq2Zp82nT/view?usp=sharing){:target="_blank"} (October 12, 2015)
- [VTK-m Overview for Code Sprint](https://drive.google.com/file/d/1XaABidfb9nn18OtHKrjaSVFeXYOUa2bD/view?usp=sharing){:target="_blank"} (September 1, 2015)
- [VTK-m poster from SciDAC PI Meeting](https://drive.google.com/file/d/1jfzZc-dqr3WXoGc7UuDSPHS5qP1Y5Zhw/view?usp=sharing){:target="_blank"} (July 2015)
- [VTK-m](https://drive.google.com/file/d/1Pjcl4aO3MRS3l4tHu5NNemh2tGY0NZFK/view?usp=sharing){:target="_blank"} (DOECGF, April 29, 2015)
- [VTK-m as a many-core solution for DOE](https://drive.google.com/file/d/1H_4JbrpmcmWW9hWctw0sBNn1ISVsIEHP/view?usp=sharing){:target="_blank"} (NVIDIA GTC, March 2015)
- [VTK-m Overview from VTK-In Situ/Rendering Presentation](https://drive.google.com/file/d/1p7mtyaXfQE5wDHlR3FANMRk9G0dhx6F7/view?usp=sharing){:target="_blank"} (NVIDIA GTC , March 2015)
- [VTK-m Overview for NVIDIA Design Review](https://drive.google.com/file/d/1V6AUsc_JYYjbBmZj8DgZHz2MY2o3Jb90/view?usp=sharing){:target="_blank"} (March 5, 2015)

---

# Logos
If you need to reference VTK-m anywhere, you may use our logo for recognition.

<table>
<thead>
<th>Type</th>
<th width="200">Thumbnail</th>
<th>File types & sizes</th>
</thead>
<tbody>
<tr>
<td markdown="1">
**PNG**
</td>
<td markdown="1">
![PNG](/img/logos/VTKm_Logo_512.png)
</td>
<td markdown="1">
- [High Res](/img/logos/VTKm_Logo_Hi.png)
- [1024](/img/logos/VTKm_Logo_1024.png)
- [512](/img/logos/VTKm_Logo_512.png)
- [256](/img/logos/VTKm_Logo_256.png)
- [128](/img/logos/VTKm_Logo_128.png)
- [64](/img/logos/VTKm_Logo_Hi.png)
</td>
</tr>
<tr>
<td markdown="1">
**SVG**
</td>
<td markdown="1">
![SVG](/img/VTKm_Logo.svg)
</td>
<td markdown="1">
- [SVG](/img/VTKm_Logo.svg)
- [PDF](/img/logos/VTKm_Logo.pdf)
</td>
</tr>
</tbody>
</table>


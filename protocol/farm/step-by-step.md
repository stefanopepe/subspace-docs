# 0. Pre-Subspace Installation:

There are a couple of items that you will want to first have set up prior to installing the Subspace software.  This includes making sure that your computer’s OS is fully updated, the hardware is configured for your particular goals, the network is prepared, and you have a proper address for the network.

In order to procure this address, you will need to install the SubWallet (recommended) or Polkadot wallet.  This software will allow you to create an account that is then used by the Subspace software.  The installation and setup process is similar regardless of the underlying platform used, i.e. Windows Vs. Linux as this software runs atop a browser.  

We will first talk about network setup, and then walk through the steps needed to install, configure, and use a SubWallet (recommended) or Polkadot wallet.

## Port Forwarding:

In order to run a node, you will need to have a number of ports forwarded to your computer.  This will help the overall health of the network by allowing others to connect and see your computers.

These ports are: ( TCP )
30333
40333

You will need to forward the following ports to the computer running the Subspace software.  This process differs due to ISP, Gateways/Modems, Routers, as well as software based firewalls. The best source of information regarding how to perform port forwarding with your hardware/ISP is to consult their support directly.  There are also a number of online tools and solutions to assist one in how to properly perform this function, such as this page by [noip.com.](https://www.noip.com/support/knowledgebase/general-port-forwarding-guide/)

After you have forwarded ports, you may need to secure your computer against unexpected access via a firewall.  Every OS has a different method of locking down one’s ports and controlling access, and you will need to consult with your computer’s support.  In the example shown below using Ubuntu, we will be using Ubuntu’s “ufw” firewall utility. A well written document on how to use this free utility has been developed by [Digital Ocean.](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-20-04)

## Wallet Installation & Setup

Presently there are a number of wallet solutions such as: SubWallet or Polkadot wallet. Only one wallet is required to be used with a Subspace node.

### Wallet  - SubWallet:

Subwallet is a web based wallet. 

This software is known to work with  [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/dr/download/), [Brave](https://brave.com/download/) and [MS Edge](https://www.microsoft.com/en-us/edge). If for any reason you are unable to run this software, try a different ( ideally freshly installed ) browser and see if this resolves your issue(s).   

NOTE: If you are planning on using a hardware wallet, such as the Ledger ( for example ), then you will want to use Chrome, as only this browser supports these hardware solutions as of this writing. 

Install: [LINK](https://subwallet.app/)

**NOTE:  Please always double check links against multiple sources.** 

Upon opening the above link, you will be presented with some choices.  Select the correct version of the software for your browser. In this example, we will be installing within Google Chrome:

Upon opening the above link, you will be presented with some choices.  Select the correct version of the software for your browser. In this example, we will be installing within Chrome:

![image1](/img/step-by-step/image1.png)

![image2](/img/step-by-step/image2.png)

In case of Google Chrome, you will be taken to the Chrome Web Store where you need to click on “Add to Chrome”

![image3](/img/step-by-step/image3.png)

You will know that it has been correctly installed, if you see its icon in the upper right hand side of the browser. Select SubWallet in the extensions list on the top of the browser, click on it and then click on “Get Started”.

![image4](/img/step-by-step/image4.png)

You are now ready to begin the Setup of your wallet.  To start, click “Create new account”.
 ![image5](/img/step-by-step/image5.png)

![image6](/img/step-by-step/image6.png)

During the initial setup, you will be presented with a 12 word mnemonic. It is critically important that you write these down exactly as shown, and it is recommended that you copy these words at least three times.  

These words are your actual wallet, and with them anyone can recreate your wallet without your knowledge.  

It is imperative that you never expose these online, and that you store these words carefully for future potential use.

If for any reason you close or move away from the active window before completely finishing this process, then the wallet will generate a new seed.  It is highly advised that before starting off, prepare your work area so that you can write down your words.





# WARNING SHOULD GO HERE
NOTE:   There is no ‘double’ checking taking place during this setup. Some web3 wallets have this additional checking mechanism in place to ensure all the words were written down correctly; however, this wallet (as of the writing of this document) assumes that the owner has performed this correctly the first time.

After writing down your seed ( or secret ) words, select the checkbox stating as much.  Then you can press the button labeled, “ Next Step”.


Please  provide and remember the Password. 

![image7](/img/step-by-step/image7.png)

Then you can select the network that the wallet will support, for Gemini 2a phase please select it.  

You are now ready to use your account. In order to check, return to the icon and you should see under Accounts, the account and the name you provided:

This wallet allows for you to create any number of individual accounts.

![image8](/img/step-by-step/image8.png)

### Wallet - Polkadot(.js)

NOTE:  Please skip this part if you’re already installed and set up SubWallet. 

This is a web based wallet, and if you are familiar with using MetaMask then you will find that there are many similarities. 

This software is known to work with [FireFox](https://www.mozilla.org/en-US/firefox/new/), [Chrome](https://www.google.com/chrome/dr/download/) and [Brave](https://brave.com/download/).  If for any reason you are unable to run this software, try a different ( ideally freshly installed ) browser and see if this resolves your issue(s).  

NOTE: If you are planning on using a hardware wallet, such as the Ledger ( for example ), then you will want to use Chrome, as only this browser supports these hardware solutions as of this writing. 

Install: [LINK](https://polkadot.js.org/extension/) 

NOTE:  Please always double check links against multiple sources. 

Upon opening the above link, you will be presented with some choices.  Select the correct version of the software for your browser. In this example, we will be installing within FireFox:

![image9](/img/step-by-step/image9.png)

This will then take you to the addon’s page to add this software to your browser:

![image10](/img/step-by-step/image10.png)

After selecting “Add to Firefox”, you will be presented with a number of dialog windows starting with whether or not you wish to grant this software access permissions:

![image11](/img/step-by-step/image11.png)

Next, you will be asked if it will be ok for this software to run in Private Windows:

![image12](/img/step-by-step/image12.png)

In both cases, it is perfectly fine to agree to these and afterwards you should see that this has been added to your browser.  You will know that it has been correctly installed, if you see its icon in the upper right hand side of the browser:

![image13](/img/step-by-step/image13.png)

You are now ready to begin the Setup of your wallet.  To start, click the above icon to begin the welcome and onboarding process.  After selecting“Understood, let me continue”, you are now ready to add an account.  Select the oversized “+” symbol to continue.

![image14](/img/step-by-step/image14.png)


During the initial setup, you will be presented with a 12 word mnemonic. It is critically important that you write these down exactly as shown, and it is recommended that you copy these words at least three times.  These words are your actual wallet, and with them anyone can recreate your wallet without your knowledge.  

![image15](/img/step-by-step/image15.png)

It is imperative that you never expose these online, and that you store these words carefully for future potential use.

If for any reason you close or move away from the active window before completely finishing this process, then the wallet will generate a new seed.  It is highly advised that before starting off, prepare your work area so that you can write down your words.

# warning should go here

NOTE:   There is no ‘double’ checking taking place during this setup. Some web3 wallets have this additional checking mechanism in place to ensure all the words were written down correctly; however, this wallet (as of the writing of this document) assumes that the owner has performed this correctly the first time.

![image16](/img/step-by-step/image16.png)

After writing down your seed ( or secret ) words, select the checkbox stating as much.  Then you can press the button labeled, “ Next Step”.


Please  provide a descriptive name and Password. 

You are now ready to use your account. In order to check, return to the icon and you should see under Accounts, the account and the name you provided:

This wallet allows for you to create any number of individual accounts.

![image17](/img/step-by-step/image17.png)

![image18](/img/step-by-step/image18.png)

#### Ledger Integration:

NOTE: Only Chrome/Chromium is supported as of this document’s writing. 

If you would rather use a ledger hardware wallet, instead of a purely software based approach, please first visit the Ledger website to verify the process is up to date:  [LINK](https://support.ledger.com/hc/en-us/articles/360016289919-Polkadot-DOT-?docs=true).  The exact method may have changed, and you may also need to update the Polkadot app for your ledger device.  

![image19](/img/step-by-step/image19.png)

The following example will assume that we are continuing with this process. This further assumes that you have correctly set up your ledger initially and have installed the Polkadot application on your device.

Open your ledger device, and launch the Polkadot application.  Then return to the Polkadot wallet and add ledger support:

![image20](/img/step-by-step/image20.png)

## Account Information

You now have a Polkadot account, starting with the number 5 (five).  This can then be converted into a Subspace ready address using the following site:

[Polkadot/Substrate Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Feu-0.gemini-2a.subspace.network%2Fws#/explorer/node)

The first time that you visit this site, you will be asked to grant permission for the site to access information from your wallet:

![image21](/img/step-by-step/image21.png)

After granting permission, you will be taken to the main landing page. You will most likely need to ensure that the site is pointing to the correct blockchain:

![image22](/img/step-by-step/image22.png)

As of this document’s writing, the current chain is: **Subspace Gemini 2a**

Once on the correct chain, locate “Accounts” in the upper left corner of the site and select “Accounts”.  

![image23](/img/step-by-step/image23.png)

You may see the need to ‘Update’ your software:

![image24](/img/step-by-step/image24.png)

![image25](/img/step-by-step/image25.png)

Lastly, select the “Yes, do this metadata update”.

You can now return to the Accounts page.

![image26](/img/step-by-step/image26.png)

You should now be able to see your Subspace address:

![image27](/img/step-by-step/image27.png)

It would be highly advisable to write down or otherwise have on hand this information for later use.

# 1. Running CLI on Windows

Requirements:

Minimum hardware requirements:  

Dual Core CPU
4 GB RAM ( 8 GB Recommended )

Distro’s Tested:

Windows 11
Windows 10
Install SubSpace: CLI
Download:
Before you begin, you will need to have a Subspace address. This address can be procured from your wallet, addressed earlier in this document. 

First, you need to download two executables - a node and a farmer.


All up-to-date executables are available on the official Subspace github page [LINK](https://github.com/subspace/subspace/releases). 

NOTE:  Please always double check links through multiple sources.

Please ensure you’re downloading the latest full release version by checking the label next to the name. 
It should say “Latest”

![image28](/img/step-by-step/image28.png)

And not “Pre-release”.

![image29](/img/step-by-step/image29.png)

Select node and a farmer for your system, in this example since we’re using Windows we will go ahead and download these two files. 

![image30](/img/step-by-step/image30.png)

If you have a GPU with OpenCL support you can use opencl-windows farmer instead of a default farmer. 

Once files are downloaded, you can leave them at “Downloads folder” or move to any other folder on your PC. Next commands will be working correctly in case both files remain in the “Downloads” folder. 


Next you need to open two Powershell (terminal) windows on your PC. To find it, click on a Windows button and search for a “Powershell”. 

![image31](/img/step-by-step/image31.png)

Type `cd Downloads`  to change to Downloads directory in both Powershell windows. 
Next, copy and paste this command to the terminal, instead of `.\NODE_FILE_NAME.exe` you will have your node name (name of the file we downloaded on the previous step) and instead of `INSERT_YOUR_ID` you can put any unique name you can think of. This name will be shown on the Telemetry and you will use it to find your node there. 

```
# Replace `NODE_FILE_NAME.exe` with the name of the node file you downloaded from releases
# Replace `INSERT_YOUR_ID` with a nickname you choose
# Copy all of the lines below, they are all part of the same command
.\NODE_FILE_NAME.exe `
--chain gemini-2a `
--execution wasm `
--state-pruning archive `
--validator `
--name INSERT_YOUR_ID
```

Click enter to start a node, you should see the following:  

![image32](/img/step-by-step/image32.jpg)

Next, click on your second Powershell window (terminal). We now need to start a farmer. 

Copy and paste the command into your Powershell, instead of a WALLET_ADDRESS you need to use wallet credentials that we’ve previously covered in the guide. For the plot-size you can choose any number, so if you want to devote 100 Gigabytes to the network you would put 100GB, if you wanted to devote 1 Terabyte you would put 1TB. 

Please note that for Gemini 2 testnet the maximum allowed storage amount is 100GB. You can put any larger number, but only 100GB or less will be used for the network. 

```
# Replace `FARMER_FILE_NAME.exe` with the name of the farmer file you downloaded from releases
# Replace `WALLET_ADDRESS` below with your account address from Polkadot.js wallet
# Replace `PLOT_SIZE` with plot size in gigabytes or terabytes, for instance 100G or 2T (but leave at least 60G of disk space for node and some for OS)
.\FARMER_FILE_NAME.exe farm --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE
```

After clicking enter you should see something similar in the terminal

![image33](/img/step-by-step/image33.jpg)

Congratulations, you are now successfully running a Subspace Node and Farmer on your Windows PC! 

## 2. Running CLI on Linux

Requirements:

Minimum hardware requirements:  

Dual Core CPU
4 GB RAM ( 8 GB Recommended )

Distro’s Tested:

Ubuntu 20.0.4 LTS
Ubuntu 22.0.4.1 LTS Download LINK
Install SubSpace: CLI
Pre-Installation:
Before you begin, you will need to have a Subspace address. This address can be procured from your wallet, addressed earlier in this document. 

Then, you need to update your packages and install dependencies.  To update your system:

```
apt update
```
```
sudo apt upgrade
```

One could combine and automate the two commands; however, if you would like to first review use as shown.
```
sudo apt autoremove
```
```
sudo apt autoclean
```
```
sudo apt clean <enter>
```
A reboot at this point is probably not needed; however, it is something to consider.

Next you will need to install dependencies:

```
sudo  apt  install  wget jq git build-essential pkg-config libssl-dev -y <enter>
```

![image34](/img/step-by-step/image34.png)

After this software has been procured and installed, download the latest subspace binaries (September 10th snapshot as of this document’s writing)

Download:
NOTE:  You may wish to first visit the official subspace github for the most up to date information at this: [LINK](https://github.com/subspace/subspace/blob/main/docs/farming.md).  Also, the most up to date releases of the software can be found:  [LINK](https://github.com/subspace/subspace/releases).

NOTE:  Please always double check links through multiple sources.

Create a folder to contain the software:

```
mkdir subspace
```
```
cd subspace
```

Next, download the Subspace Farmer Binary:  

```
wget -O Subspace_farmer https://github.com/subspace/subspace/releases/download/gemini-2a-2022-sep-10/subspace-farmer-ubuntu-x86_64-gemini-2a-2022-sep-10
```

![image35](/img/step-by-step/image35.png)

Next, download the Subspace Node Binary:

```
wget -O Subspace_node https://github.com/subspace/subspace/releases/download/gemini-2a-2022-sep-10/subspace-node-ubuntu-x86_64-gemini-2a-2022-sep-10 <enter>
```

You should have the following:

![image36](/img/step-by-step/image35.png)

Make both the Farmer and Node downloadsExecutable:

```
chmod +x Subspace_farmer && chmod +x Subspace_node
```

Configuration / Running:
The software has been downloaded and configured to be run on your computer.  The following will show the commands needed to get your nodes up and running.  

Please be sure to have your account information ( Subspace address ) prior to continuing. 

Open a second terminal:

![image37](/img/step-by-step/image37.png)

In the first terminal, starting your Node software:

```
./ Subspace_node `
--chain gemini-2a `
--execution wasm `
--state-pruning archive `
--validator `
--name SubspaceTest <enter>

```

Note:  “--name “ this can be any name/id of your liking.

![image38](/img/step-by-step/image38.png)

Your terminal should look like this

![image39](/img/step-by-step/image39.png)

In the second terminal, we can now start your Farmer software:

```
./ Subspace_farmer --reward-address WALLET_ADDRESS --plot-size PLOT_SIZE <enter>
```

Where: WALLET_ADDRESS == Subspace address from your wallet, and 
PLOT_SIZE == is the amount of space you wish to provide to the network.

Eg:  If you wish to provide 50 Gigabytes, enter 50G

In the following example shown, we will be offering up 10G of space:

```
./ Subspace_farmer --reward-address WALLET_ADDRESS --plot-size 10G <enter>
```

If you go back to the first terminal window, you should begin to see your computer connect to other nodes and begin the sync process:

![image40](/img/step-by-step/image40.png)

# 3. Explorers

Account Information:

The following is how one is able to check your account information, such as account balance.

First open your browser and goto the Farmnet: [Polkadot/Substrate Portal](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ffarm-rpc.subspace.network#/explorer/node)

NOTE:  Need to open this explorer on the ‘computer’ running the node and with the Polkadot wallet opened.

Selecting the Correct Chain:

Make sure that the web app is pointed locally.  Do this by clicking on the Subspace logo in the upper left hand side of the screen:

![image41](/img/step-by-step/image41.png)

You should see a list, scroll all the way down until you see, “Development”.  

Click to expand and select:

Press the (now) purple switch to finalize. 

![image42](/img/step-by-step/image42.png)

### Balance Check:

Accounts :: To see current balance

![image43](/img/step-by-step/image43.png)

### Node Check: 

Network -> Node Info :: Should have the same info as in the command line RE: number of peers

### External Explorer:

The following is an external blockchain explorer, and will allow you to confirm that the network is able to locate your node:

https://telemetry.polkadot.io/#list/0x332ef6e751e25426e38996c51299dfc53bcd56f40b53dce2b2fc8442ae9c4a74

NOTE:  You will need to sort based on Location and then locate oneself via the city.  A search, as of right now, doesn’t really work well.

4.0 FAQs / Troubleshooting / Additional Resources:
FAQs:

How can one change the default path for offered storage for the network?  
Please see the following [LINK](https://forum.subspace.network/t/unable-to-set-a-custom-path-for-farmer/166).

Troubleshooting:

Farming seems to be ‘broken’, try to restart your famer in a clean state as detailed [HERE](https://forum.subspace.network/t/how-do-i-fully-remove-uninstall-the-farmer/157).

Additional Resources:

[Subspace Forum](https://forum.subspace.network/) - Excellent source for technical information. 
[Discord](https://discord.gg/subspace-network/) to see current topics and discussions

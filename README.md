# AuthentiChain

## Overview

**AuthentiChain** is a blockchain-based solution designed to replace traditional physical and digital warranty cards with decaying NFTs (Non-Fungible Tokens). This innovative approach ensures transparency, authenticity, and enhanced security for product ownership and warranty management.

## Objectives

The primary goals of AuthentiChain include:

- **NFT Integration**: Allow brands and retailers to introduce NFTs that accompany each product.
- **Ownership Verification**: Enable customers to verify the authenticity and ownership of their products using digital NFTs, facilitating ownership transfer upon resale.
- **Warranty Program Integration**: Allow brands and retailers to integrate digital NFTs into their warranty programs, enabling owners to track repairs and replacements for their products.

## Project Flow

### 1. Product Registration

When a product is manufactured, it is registered in the e-Commerce warranty system. The registration process includes:

- Creating a digital identity for the product.
- Storing essential information such as the product’s make, model, serial number, and other relevant details.

A web-based user interface will be developed for manufacturers to register their products using a product registration form, product details input, and product image upload.

### 2. NFT Minting

Once registered, the NFT representing the product certificate is generated and attached to the product’s digital identity. The NFT contains:

- Registration date
- Warranty expiration date
- Unique serial number for authenticity verification

NFTs are minted and stored in a tamper-proof and decentralized manner on the Ethereum blockchain.

### 3. Product Sale and Warranty Verification

When a product is sold, the NFT representing the title is transferred to the new owner. The new owner can use the NFT to verify the product's authenticity and track its ownership throughout its life. Customers can verify their purchase by scanning a QR code on the product or searching for the NFT on a Blockchain Explorer.

### 4. Warranty Claims

Warranty claims are processed through the e-Commerce warranty system. The manufacturer can validate the product using the NFT and process warranty claims accordingly. A web-based user interface has been developed for manufacturers to manage warranty claims and products.

## Technology Stack

- **Blockchain**: Ethereum
- **Smart Contracts**: ERC721 for NFT creation and management
- **Development Environment**: Hardhat for smart contract development and testing

## User Interaction

### Seller/Brand Actions

1. **Upload NFT Metadata**: Sellers upload NFT metadata and files associated with a product.
2. **Verification**: The seller sends the hash to Hardhat for verification.
3. **Smart Contract Interaction**: Sellers can interact with the smart contract to register or mint the NFT.

### User/Buyer Actions

1. **Receive Verified NFT**: Users receive the verified NFT and its associated product history.
2. **Manage NFT Details**: Users can view and manage NFT details and history through the frontend interface.

## User Interface Features

- **Signup/Login**: Account creation and login for sellers and buyers.
- **Profile Management**: Users can update their profile information.
- **Product Browsing**: Users can explore products and view details.
- **Warranty Verification**: Users can check the warranty status of purchased products.

## Conclusion

AuthentiChain provides a comprehensive solution for managing NFT-based warranties, ensuring secure record-keeping through blockchain consensus. This system facilitates seamless interactions between sellers, buyers, and product owners, enhancing the overall warranty management experience.

## Project Structure

```
authentichain/
├── client/
│   ├── public/
│   ├── src/
│   ├── .gitignore
│   ├── package.json
│   └── README.md
└── server/
    ├── config/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── .env
    └── package.json
```

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd client
npm install
cd ../server
npm install
```

### Running the Application

To run the client and server applications, use the following commands:

**Client:**
```bash
cd client
npm start
```

**Server:**
```bash
cd server
node index.js
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Ethereum](https://ethereum.org/)
- [Hardhat](https://hardhat.org/)
- [OpenZeppelin](https://openzeppelin.com/) for smart contract libraries.
